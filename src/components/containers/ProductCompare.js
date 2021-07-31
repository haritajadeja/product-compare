import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import actions from "../../actions";

function ProductCompare(props) {
  const [productData, setProducts] = useState([]);
  const {
    setProductCompare,
    productsToCompare,
    products,
    properties = [],
  } = props;

  useEffect(() => {
    setProductCompare();
  }, []);

  useEffect(() => {
    const ids = productsToCompare;
    const data = products.filter((obj) => ids.includes(obj.id));

    setProducts(data);
  }, [productsToCompare]);

  const dateLength = productData.length || 0;
  const prepareProductList = () => {
    return dateLength > 1 ? (
      <Col md="12" className="table-responsve">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              {productData.map((p) => {
                return <th key={p.id}>{p.properties.name}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {properties.map((item) => {
              return (
                item !== "name" &&
                item !== "sku" && (
                  <tr key={"prop-" + item}>
                    <td>
                      <b>{item}</b>
                    </td>
                    {productData.map((p) => {
                      return <td key={p.id}>{p.properties[item]}</td>;
                    })}
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </Col>
    ) : (
      <Col md="12">
        {dateLength === 0
          ? "No producst to compare."
          : "Add some more products to compare."}
      </Col>
    );
  };
  return <Row>{prepareProductList()}</Row>;
}

const mapStateToProps = (state) => {
  return {
    productsToCompare: state.compare,
    products: state.products,
    properties: state.properties,
  };
};
const mapDispatchToProps = {
  setProductCompare: actions.setProductCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompare);
