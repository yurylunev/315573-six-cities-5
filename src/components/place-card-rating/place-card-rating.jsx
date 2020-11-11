import React from "react";
import PropTypes from "prop-types";

const PlaceCardRating = (props) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{width: `${Math.round(props.stars * 20)}%`}}/>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

PlaceCardRating.propTypes = {
  stars: PropTypes.number.isRequired
};

export default PlaceCardRating;
