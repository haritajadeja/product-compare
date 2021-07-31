import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ProductList from "./components/containers/ProductList";
import ProductCompare from "./components/containers/ProductCompare";
import FilterBar from "./components/containers/FilterBar";
import Panel from "./components/core/Panel";

function App() {
  return (
    <Container className="mt-3 app" fluid>
      <Row>
        <Col md="2">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Special Offer</Card.Title>
              <Card.Text>
                <b className="text-primary">10 % OFF</b>
              </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">View Offer</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="10">
          <Panel heading="Headphones">
            <ProductList />
          </Panel>
          <Panel heading="Compare Products">
            <FilterBar />
            <ProductCompare />
          </Panel>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
