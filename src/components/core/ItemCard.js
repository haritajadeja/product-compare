import { Card } from "react-bootstrap";
import Checkbox from "./Checkbox";
function ItemCard(props) {
  const { item, productsToCompare } = props;

  const checked = productsToCompare.includes(item.id);
  return (
    item && (
      <Card style={{ width: "14rem" }}>
        <Card.Img
          variant="top"
          src="https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/newsletter/shutterstock_1196821240.jpg?1622542766"
        />
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
