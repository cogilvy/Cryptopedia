import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import CryptoArticle from '../components/CryptoArticle';
import { Grid, Header, List, Segment } from 'semantic-ui-react';
import TradingViewWidget from 'react-tradingview-widget';
import { formatNumbers, fetchCryptoData } from '../../utilities/cryptos-api';

function CryptoDetailPage() {
  const [crypto, setCrypto] = useState({});

  const {symbol, id} = useParams();

  useEffect(() => {
    async function fetchCrypto() {
      const res = await fetchCryptoData(id);
      console.log(res);
      setCrypto(res);
    }
    fetchCrypto();
  }, []);

  return (
    crypto.name ?
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header style={{textDecoration: "underline"}} size="huge">{crypto.name}({crypto.symbol})</Header>
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
                    <h5 style={{margin: "0px"}}>${formatNumbers(crypto.quote.USD.price.toFixed(4))}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Market Capitalization</List.Header>
                    <h5 style={{margin: "0px"}}>${formatNumbers(crypto.quote.USD.market_cap.toFixed(2))}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Volume Sold in 24 Hours</List.Header>
                    <h5 style={{margin: "0px"}}>${formatNumbers(crypto.quote.USD.volume_24h.toFixed(2))}</h5>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last Hour</List.Header>
                    {
                      crypto.quote.USD.percent_change_1h.toString().includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{crypto.quote.USD.percent_change_1h.toFixed(2)}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{crypto.quote.USD.percent_change_1h.toFixed(2)}%</h5>
                    }
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last 24 Hours</List.Header>
                    {
                      crypto.quote.USD.percent_change_24h.toString().includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</h5>
                    }
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="h3">Percent Change in Last 7 Days</List.Header>
                    {
                      crypto.quote.USD.percent_change_7d.toString().includes("-") ?
                      <h5 style={{color: "red", margin: "0px"}}>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</h5>
                      :
                      <h5 style={{color: "green", margin: "0px"}}>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</h5>
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
          {/* <Grid.Column width={14}>
            {
              cryptoArticles.length > 0 ?
              <Header style={{textDecoration: "underline"}} size="huge">Recent News:</Header>
              :
              null
            }
            <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>
            {
              cryptoArticles.length > 0 ?
              cryptoArticles.map(article => {
                return <CryptoArticle article={article} />
              })
              :
              null
            }
            </div>
          </Grid.Column> */}
          <Grid.Column width={1}>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    : 
    <h1>Loading...</h1>
  );
}

export default CryptoDetailPage;