import React from "react";
import {featuresType} from "../../mocks/offers.proptypes";

const PropertyFeatures = (props) => (
  <ul className="property__features">{
    Object.keys(props.features).map((featureName, i)=>(
      <li key={i} className={`property__feature property__feature--${featureName}`}>
        {props.features[featureName]}
      </li>)) }
  </ul>
);

PropertyFeatures.propTypes = {
  features: featuresType
};

export default PropertyFeatures;
