import { Card } from "react-bootstrap";

function Panel(props) {
  return (
    <Card>
      <Card.Header>
        <h3>{props.heading}</h3>
      </Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default Panel;
