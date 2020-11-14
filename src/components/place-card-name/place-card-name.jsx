import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PlaceCardName = (props) =>
  (<h2 className="place-card__name">
    <Link to="/offer/4">{props.placeCardName}</Link>
  </h2>);

PlaceCardName.propTypes = {
  placeCardName: PropTypes.string.isRequired
};

export default PlaceCardName;
