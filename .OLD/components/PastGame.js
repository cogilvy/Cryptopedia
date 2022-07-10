import React, { Component, Fragment } from 'react';
import { Button, Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createPortfolio, fetchAllPortfolios, fetchUsersInGame, fetchAllGames } from '../redux/actions'

class PastGame extends Component {

  state = {
    name: `Portfolio For: ${this.props.game.title}`,
    budget: this.props.game.budget,
    user_id: this.props.currentUser.id,
    game_id: this.props.game.id
  }

  numberWithCommas = (x) => {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  removeExtraDecimals = (x) => {
    let parts = x.split(".")
    parts[1] = parts[1].substring(0,2)
    return parts.join(".")
  }

  joinGame = (event, portObj) => {
    event.preventDefault()
    this.props.createPortfolio(portObj)
    this.props.fetchAllGames()
  }

  totalValueOfPortfolio = (purchaseArray) => {
    const purchaseValueArray = []
    let sum = 0
    if (purchaseArray.length > 0) {
      purchaseArray.map(purchase => {
        purchaseValueArray.push(purchase.quantity * purchase.crypto.price)
      })
      for (let i=0; i < purchaseArray.length; i++) {
        sum += purchaseValueArray[i]
      }
      return this.removeExtraDecimals(this.numberWithCommas(sum))
    } else {
      return 0
    }
  }

  compare = (a, b) => {
    const portValueA = parseInt(this.totalValueOfPortfolio(a.purchases))
    const portValueB = parseInt(this.totalValueOfPortfolio(b.purchases))

    let compare = 0
    if (portValueA > portValueB) {
      compare = 1;
    } else if (portValueA < portValueB) {
      compare = -1;
    }
    return compare * -1;
  }

  componentDidMount() {
    this.props.fetchAllPortfolios()
  }

  render() {
    let startDate = new Date(this.props.game.start)
    let endDate = new Date(this.props.game.end)
    let now = new Date()
    return (
      <div className="game-card">
        <Grid>
          <Grid.Row>
            <Grid.Column width={9}>
              <div>
                <Header size="huge">{this.props.game.title} </Header>
                <h5 style={{margin: "0%"}}>Starting Budget: ${this.numberWithCommas(this.props.game.budget)}0</h5>
                <span style={{fontSize: "100%", margin: "0%"}}>({startDate.toString().substring(0, 16)}-{endDate.toString().substring(0, 16)})</span>
              </div>
            </Grid.Column>
            <Grid.Column width={7}>
              <div>
                <Header size="medium">Final Standings:</Header>
                <ol>
                  {
                    this.props.game.users.length > 0 ?
                    this.props.game.portfolios.sort(this.compare).slice(0, 4).map(port => {
                      return <li> {port.user.name} - Portfolio Value: ${this.totalValueOfPortfolio(port.purchases)}</li>
                    })
                    :
                    <p style={{color: "red"}}>There were no users in this game ☹️</p>
                  }
                </ol>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>

            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
            <Grid.Column width={7}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.usersReducer.currentUser,
  portfolios: state.simulatorReducer.portfolios
})

const mapDispatchToProps = (dispatch) => ({
  createPortfolio: (data) => dispatch(createPortfolio(data)),
  fetchAllPortfolios: () => dispatch(fetchAllPortfolios()),
  fetchAllGames: () => dispatch(fetchAllGames())
})

export default connect(mapStateToProps, mapDispatchToProps)(PastGame);
