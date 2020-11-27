import React from "react";
import PlaceCard from "../place-card/place-card";
import {offersListTypes} from "../../mocks/offers.proptypes";

const PlacesList = (props) => (
  <div className={`cities__places-list places__list tabs__content`}>
    {props.placesList.map((place) => {
      return <PlaceCard
        key={place.offerId}
        card={place}
        moveHandler={props.moveHandler}
        type={props.type}
      />;
    })}
  </div>
);

PlacesList.propTypes = offersListTypes;

export default PlacesList;
