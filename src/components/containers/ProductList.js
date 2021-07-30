import React, { useEffect } from "react";
import { connect } from "react-redux";
import products from "./../../products.json";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../core/ItemCard";
import { setCompareData } from "./../../utils/compare";
import actions from "../../actions";

function ProductList(props) {
  useEffect(() => {
    props.setProduct(products);
  }, []);
  let productData = products["products"];
  const addToCompare = (productId = "", status) => {
    // setCompareData(productId, status);
    props.addProductCompare(productId);
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

const mapStateToProps = (state) => {};
const mapDispatchToProps = {
  setProduct: actions.setProduct,
  addProductCompare: actions.addProductCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
