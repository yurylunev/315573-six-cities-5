import React from 'react';
import {DescriptionType, HostType} from "../../mocks/offers.proptypes";

const PropertyHost = (props) => (
  <div className="property__host">
    <h2 className="property__host-title">Meet the host</h2>
    <div className="property__host-user user">
      <div
        className={props.host.isPro
          ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
          : `property__avatar-wrapper property__avatar-wrapper user__avatar-wrapper`}>
        <img className="property__avatar user__avatar" src={props.host.avatar}
          width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="property__user-name">{props.host.userName}</span>
    </div>
    <div className="property__description">{
      props.description.map((text, i)=>(<p key={i} className="property__text">{text}</p>))
    }
    </div>
  </div>
);

PropertyHost.propTypes = {
  host: HostType,
  description: DescriptionType
};

export default PropertyHost;
