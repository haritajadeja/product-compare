import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import Checkbox from "../core/Checkbox";
import { ListGroup } from "react-bootstrap";

function FilterBar(props) {
  const {
    properties,
    compareProperties,
    compareAllProperty,
    addProperty,
    removeProperty,
  } = props;
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    const selectIdentifier = compareProperties.length === properties.length;
    setSelectAll(selectIdentifier);
  }, [compareProperties]);

  const handlePropertyChange = (property = "", status) => {
    if (status) {
      addProperty(property);
    } else {
      removeProperty(property);
    }
  };

  const handleSelectAll = (id = "", status) => {
    compareAllProperty(status);
  };

  const propertyList = properties
    ? properties.map((item) => {
        return (
          item !== "name" &&
          item !== "sku" && (
            <ListGroup.Item>
              <Checkbox
                name={item}
                checked={compareProperties.includes(item)}
                label={item}
                id={item}
                handleOnChange={handlePropertyChange}
              ></Checkbox>
            </ListGroup.Item>
          )
        );
      })
    : "";
  return (
    propertyList && (
      <div>
        <div>
          <b className="mr-2">Properties to Compare:</b>
          <Checkbox
            name="select_all"
            checked={selectAll}
            label="Select All"
            id="selectall"
            handleOnChange={handleSelectAll}
          ></Checkbox>
        </div>
        <ListGroup horizontal className="mt-2 mb-3">
          {propertyList}
        </ListGroup>
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    properties: state.initialProperties,
    compareProperties: state.properties,
  };
};
const mapDispatchToProps = {
  compareAllProperty: actions.compareAllProperty,
  addProperty: actions.addProperty,
  removeProperty: actions.removeProperty,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
