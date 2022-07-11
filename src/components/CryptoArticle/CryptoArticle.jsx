import { Header, Segment } from 'semantic-ui-react';

function CryptoArticle({article}) {

  return (
    <div className="crypto-article">
      <Segment raised>
        <strong><Header as='h3'>{article.title}</Header></strong>
        <br></br>
        <p className="max-lines">{article.content ? article.content.substring(0,190) + "..." : null}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Click Here To View Full Article</a>
      </Segment>
    </div>
  );
}

export default CryptoArticle;