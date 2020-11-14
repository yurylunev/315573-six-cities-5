import React from "react";
import {priceType} from "../../mocks/offers.proptypes";

const PlaceCardPrice = (props) =>
  (<div className="place-card__price">
    <b className="place-card__price-value">{props.price.currency}{props.price.value}&nbsp;</b>
    <span className="place-card__price-text">&#47;&nbsp;{props.price.period}</span>
  </div>);

PlaceCardPrice.propTypes = {
  price: priceType
};

export default PlaceCardPrice;
