// ListRecords.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function ListRecords(props) {
  console.log(props)
  return (
    <div>
      <h1>React App</h1>
      <ul>{props.list}</ul>
      <div className="wrapper">
        {props.list.map && props.list.map((listItem) => (
          <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Body>
              <Card.Text>listItem</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>bing bong description 1</ListGroup.Item>
              <ListGroup.Item>bing bong description 2</ListGroup.Item>
              <ListGroup.Item>bing bong description 3</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </div>
  );
};