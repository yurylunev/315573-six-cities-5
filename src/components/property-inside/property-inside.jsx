import React from "react";
import {InsideListType} from "../../mocks/offers.proptypes";

const PropertyInside = (props) => (
  <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {
        props.insideList.map((inside, i)=>(
          <li key={i} className="property__inside-item">{inside}</li>
        ))
      }
    </ul>
  </div>
);

PropertyInside.propTypes = {
  insideList: InsideListType
};

export default PropertyInside;
