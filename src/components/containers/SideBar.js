import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import Checkbox from "../core/Checkbox";

function SideBar(props) {
  const { properties, addProperty, removeProperty } = props;

  const handlePropertyChange = (property = "", status) => {
    if (status) {
      addProperty(property);
    } else {
      removeProperty(property);
    }
  };

  return properties
    ? properties.map((item) => {
        return (
          <Checkbox
            name={item}
            checked={true}
            label={item}
            id={item}
            handleOnChange={handlePropertyChange}
          ></Checkbox>
        );
      })
    : "";
}

const mapStateToProps = (state) => {
  return {
    properties: state.initialProperties,
  };
};
const mapDispatchToProps = {
  addProperty: actions.addProperty,
  removeProperty: actions.removeProperty,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
