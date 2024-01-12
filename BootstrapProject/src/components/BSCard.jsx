import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BSCard({src="Pass image src",title="Pass value in props",bodyText="{title,src,bodyText,btnText(Optional)}",btnText}) {
  return (
    <>
     <div class="col">
    <Card className='mb-5'>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{bodyText}
        </Card.Text>
        {btnText &&
        <Button variant="primary">{btnText}</Button>
      }
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default BSCard;