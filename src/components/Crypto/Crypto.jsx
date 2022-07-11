import { useNavigate } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import { formatNumbers } from '../../utilities/cryptos-api';

function Crypto({crypto, idx}) {
  const navigate = useNavigate();

  return (
    <Table.Row onClick={() => navigate(`/cryptos/${crypto.symbol}/${crypto.id}`)}>
      <Table.Cell>{idx+1}</Table.Cell>
      <Table.Cell>{crypto.symbol}</Table.Cell>
      <Table.Cell>{crypto.name}</Table.Cell>
      <Table.Cell>${formatNumbers(crypto.quote.USD.market_cap.toFixed(2))}</Table.Cell>
      {
        crypto.quote.USD.price > 999 ?
        <Table.Cell style={{color: "blue"}}>${formatNumbers(crypto.quote.USD.price.toFixed(3))}</Table.Cell>
        :
        <Table.Cell style={{color: "blue"}}>${formatNumbers(crypto.quote.USD.price.toFixed(6))}</Table.Cell>
      }
      <Table.Cell>${formatNumbers(crypto.quote.USD.volume_24h.toFixed(2))}</Table.Cell>
      {
        crypto.quote.USD.percent_change_24h.toString().includes("-") ?
        <Table.Cell style={{color: "red"}}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</Table.Cell>
        :
        <Table.Cell style={{color: "green"}}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</Table.Cell>
      }
      {
        crypto.quote.USD.percent_change_7d.toString().includes("-") ?
        <Table.Cell style={{color: "red"}}>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</Table.Cell>
        :
        <Table.Cell style={{color: "green"}}>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</Table.Cell>
      }
    </Table.Row>
  );
}

export default Crypto;
