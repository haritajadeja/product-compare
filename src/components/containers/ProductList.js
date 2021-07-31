import React, { useEffect } from "react";
import { connect } from "react-redux";
import products from "./../../products.json";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../core/ItemCard";
import actions from "../../actions";

function ProductList(props) {
  const {
    addProductCompare,
    removeProductCompare,
    productsToCompare,
    productData = [],
  } = props;

  useEffect(() => {
    props.setProduct(products);
  }, []);

  const addToCompare = (productId = "", status) => {
    if (status) {
      addProductCompare(productId);
    } else {
      removeProductCompare(productId);
    }
  };

  const prepareProductList = () => {
    return productData ? (
      <React.Fragment>
        {productData.map((item) => {
          return (
            <Col md="3" key={item.id}>
              <ItemCard
                item={item}
                addToCompare={addToCompare}
                productsToCompare={productsToCompare}
              ></ItemCard>
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

const mapStateToProps = (state) => {
  return {
    productsToCompare: state.compare,
    productData: state.products,
  };
};
const mapDispatchToProps = {
  setProduct: actions.setProduct,
  addProductCompare: actions.addProductCompare,
  removeProductCompare: actions.removeProductCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
