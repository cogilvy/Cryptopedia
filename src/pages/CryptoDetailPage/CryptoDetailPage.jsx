import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CryptoArticle from '../components/CryptoArticle';
import { Grid, Header, List, Segment } from 'semantic-ui-react';
import TradingViewWidget from 'react-tradingview-widget';

function CryptoDetailPage() {
  const [crypto, setCrypto] = useState({});

  const {symbol, id} = useParams();

  useEffect(() => {
    async function fetchCrypto() {

    }
    fetchCrypto();
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header style={{textDecoration: "underline"}} size="huge">{this.props.crypto.name}({this.props.crypto.symbol})</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Link to="/cryptos" color="red">Back To Table</Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>

          </Grid.Column>
          <Grid.Column width={9}>
            <TradingViewWidget symbol={`${symbol}USD`} />
          </Grid.Column>
          <Grid.Column width={5}>
          <div style={{width: "70%", margin: "5% 10%"}}>
            <Header style={{textDecoration: "underline"}} size="huge">Statistics:</Header>
            <Segment inverted>
              <List divided inverted relaxed="very">
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Current Price</List.Header>
                    <h5 style={{margin: "0px"}}>${this.numberWithCommas(this.props.crypto.price)}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Market Capitalization</List.Header>
                    <h5 style={{margin: "0px"}}>${this.numberWithCommas(this.props.crypto.market_cap)}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Volume Sold in 24 Hours</List.Header>
                    <h5 style={{margin: "0px"}}>${this.numberWithCommas(this.props.crypto.volume)}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last Hour</List.Header>
                    {
                      this.props.crypto.change_1hr.includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{this.props.crypto.change_1hr}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{this.props.crypto.change_1hr}%</h5>
                    }
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last 24 Hours</List.Header>
                    {
                      this.props.crypto.change_24hr.includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{this.props.crypto.change_24hr}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{this.props.crypto.change_24hr}%</h5>
                    }
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last 7 Days</List.Header>
                    {
                      this.props.crypto.change_7d.includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{this.props.crypto.change_7d}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{this.props.crypto.change_7d}%</h5>
                    }
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </div>
          </Grid.Column>
          <Grid.Column width={1}>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            {
              this.props.cryptoArticles.length > 0 ?
              <Header style={{textDecoration: "underline"}} size="huge">Recent News:</Header>
              :
              null
            }
            <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>
            {
              this.props.cryptoArticles.length > 0 ?
              this.props.cryptoArticles.map(article => {
                return <CryptoArticle article={article} />
              })
              :
              null
            }
            </div>
          </Grid.Column>
          <Grid.Column width={1}>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default CryptoDetailPage;