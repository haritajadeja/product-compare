import React from "react";
import products from "./../../products.json";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../core/ItemCard";
import { setCompareData } from "./../../utils/compare";

function ProductList() {
  let productData = products["products"];
  const addToCompare = (productId = "") => {
    setCompareData(productId);
    //updateCounter();
  };
  const prepareProductList = () => {
    return productData ? (
      <React.Fragment>
        {productData.map((item) => {
          return (
            <Col md="3" key={item.id}>
              <ItemCard item={item} addToCompare={addToCompare}></ItemCard>
            </Col>
          );
        })}
      </React.Fragment>
    ) : (
      <Col md="12">No product found</Col>
    );
  };
  return <Row>{prepareProductList()}</Row>;
}
export default ProductList;
