import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import actions from "../../actions";
import TableResponsive from "../core/TableResponsive";

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

  const dataLength = productData.length || 0;

  const prepareHeader =
    dataLength &&
    productData.map((p) => {
      return <th key={p.id}>{p.properties.name}</th>;
    });

  const prepareBody =
    properties &&
    properties.map((item) => {
      return (
        <tr key={"prop-" + item}>
          <td>
            <b>{item}</b>
          </td>
          {productData.map((p) => {
            return <td key={p.id}>{p.properties[item]}</td>;
          })}
        </tr>
      );
    });

  const prepareProductList = () => {
    return dataLength > 1 ? (
      <Col md="12">
        <TableResponsive
          header={prepareHeader}
          body={prepareBody}
        ></TableResponsive>
      </Col>
    ) : (
      <Col md="12">
        {dataLength === 0
          ? "No producst to compare."
          : "Add more products to compare."}
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
