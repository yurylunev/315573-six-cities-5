import React from "react";
import PropTypes from "prop-types";
import PropertyBookmark from "../property-bookmark/property-bookmark";

const PropertyName = (props) => (
  <div className="property__name-wrapper">
    <h1 className="property__name">
      {props.name}
    </h1>
    <PropertyBookmark/>
  </div>
);

PropertyName.propTypes = {
  name: PropTypes.string.isRequired
};

export default PropertyName;
