import { Card } from "react-bootstrap";
import Checkbox from "./Checkbox";
function ItemCard(props) {
  const { item, productsToCompare } = props;

  const checked = productsToCompare.includes(item.id);
  return (
    item && (
      <Card style={{ width: "14rem" }} className="mt-2">
        <Card.Img variant="top" src={item.properties.imgsrc} />
        <Card.Body>
          <Card.Subtitle>{item.properties.name}</Card.Subtitle>
          <Card.Subtitle className="mt-2 mb-2 text-muted">
            INR {item.properties.cost}
          </Card.Subtitle>
          <Card.Text>{item.discription}</Card.Text>
          <Checkbox
            name={"compare" + item.id}
            checked={checked}
            label="Add to Compare"
            id={item.id}
            handleOnChange={props.addToCompare}
          ></Checkbox>
          <br />
          {/* <Card.Link href="#">Add to Cart</Card.Link> */}
        </Card.Body>
      </Card>
    )
  );
}
export default ItemCard;
