import { useState, useEffect } from "react";
import { fetchTop100Cryptos } from "../../utilities/cryptos-api";
import Crypto from '../../components/Crypto/Crypto';
import { Table, Message } from 'semantic-ui-react';

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function fetchCyrptos() {
      const top100 = await fetchTop100Cryptos();
      setCryptos(top100);
    }
    fetchCyrptos();
  }, []);

  return (
    <div className="crypto-container">
      <h1 style={{ textAlign: "center" }}>
        Top 100 Cryptocurrencies by Market Capitalization
      </h1>
      <div style={{ width: "25%", margin: "auto", textAlign: "center" }}>
        <Message size="small" positive>
          Click on a cryptocurrency to see more detailed information.
        </Message>
      </div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Volume (24hr)</Table.HeaderCell>
            <Table.HeaderCell>Change (24hr)</Table.HeaderCell>
            <Table.HeaderCell>Change (7d)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cryptos.map((crypto, idx) => {
            return (
              <Crypto
                key={crypto.id}
                crypto={crypto}
                idx={idx}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default CryptoTable;