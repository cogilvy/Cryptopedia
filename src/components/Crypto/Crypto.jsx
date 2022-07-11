import { useNavigate } from 'react-router-dom';
import { Table } from 'semantic-ui-react'

function Crypto({crypto, idx}) {
  const navigate = useNavigate();

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  return (
    <Table.Row onClick={() => navigate(`/cryptos/${crypto.symbol}/${crypto.id}`)}>
      <Table.Cell>{idx+1}</Table.Cell>
      <Table.Cell>{crypto.symbol}</Table.Cell>
      <Table.Cell>{crypto.name}</Table.Cell>
      <Table.Cell>${numberWithCommas(crypto.quote.USD.market_cap.toFixed(2))}</Table.Cell>
      <Table.Cell style={{color: "blue"}}>${parseFloat(crypto.quote.USD.price).toFixed(4)}</Table.Cell>
      <Table.Cell>${numberWithCommas(crypto.quote.USD.volume_24h.toFixed(2))}</Table.Cell>
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
