import React from "react";
import products from "../../products.json";
import { Row, Col } from "react-bootstrap";
import { setCompareData, getCompareData } from "../../utils/compare";

function ProductCompare() {
  let properties = [
    "sku",
    "cost",
    "name",
    "brand",
    "type",
    "Noise Cancellation",
    "rating",
    "color",
  ];
  let productsToCompare = [1, 2, 4, 5]; //getCompareData();
  let productData = products["products"].filter((obj) =>
    productsToCompare.includes(obj.id)
  );
  console.log(productData);
  const addToCompare = (productId = "") => {
    setCompareData(productId);
    //updateCounter();
  };
  const prepareProductList = () => {
    return productData ? (
      <div className="table-responsve">
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
      </div>
    ) : (
      <Col md="12">No product found</Col>
    );
  };
  return <Row>{prepareProductList()}</Row>;
}
export default ProductCompare;
