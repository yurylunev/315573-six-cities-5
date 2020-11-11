import React from "react";
import PropTypes from "prop-types";

const PlaceCardName = (props) =>
  (<h2 className="place-card__name">
    <a href="#">{props.placeCardName}</a>
  </h2>);

PlaceCardName.propTypes = {
  placeCardName: PropTypes.string.isRequired
};

export default PlaceCardName;
