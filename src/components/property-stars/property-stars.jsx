import React from "react";
import PropTypes from "prop-types";

const PropertyStars = (props) => (
  <div className="property__rating rating">
    <div className="property__stars rating__stars">
      <span style={{width: `${Math.round(props.stars * 20)}%`}}/>
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="property__rating-value rating__value">4.8</span>
  </div>
);

PropertyStars.propTypes = {
  stars: PropTypes.number.isRequired
};

export default PropertyStars;
