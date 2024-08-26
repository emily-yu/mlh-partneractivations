// ListRecords.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element
// import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useRef } from 'react';
export default function ListRecords(props) {
  console.log(props)

  const latestAdded = useRef(null)
  // inline stylings
  const styles = {
    myCoolButton: {
        color: 'blue'
    }
  }
  return (
    <div>
      <h1 style={styles.myCoolButton}>React App</h1>
      
      {latestAdded.current && (<p>{latestAdded.current}</p>)}
      {/* test using react bootstrap components */}
      <Stack gap={5} padding={10}>
        <div className="p-5"> {/* p-N is padding class */}
          <code>{props.list}</code>
        </div>

        <div className="p-3">
          {props.list.map && props.list.map((listItem) => (
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Body>
                <Card.Title>{listItem[0]}</Card.Title>
                <Card.Text>{listItem[1]}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>bing bong description 1</ListGroup.Item>
                <ListGroup.Item>bing bong description 2</ListGroup.Item>
                <ListGroup.Item>bing bong description 3</ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </div>
      </Stack>
    </div>
  );
};