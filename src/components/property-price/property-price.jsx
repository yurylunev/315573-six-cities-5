import React from 'react';
import {PriceType} from "../../mocks/offers.proptypes";

const PropertyPrice = (props) => (
  <div className="property__price">
    <b className="property__price-value">{props.price.currency}{props.price.value}</b>
    <span className="property__price-text">&nbsp;{props.price.period}</span>
  </div>
);

PropertyPrice.propTypes = {
  price: PriceType
};

export default PropertyPrice;
