import React from "react";
import PropTypes from "prop-types";
import {offerTypes} from "../../mocks/offers.proptypes";
import PlaceCard from "../place-card/place-card";

const FavoritesLocations = (props) => {
  const favoritesList = props.favoritesList;

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{favoritesList[0].city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {favoritesList.map((card)=>
        <PlaceCard type={`favorites__card`} key={card.offerId}
          card={card}
          moveHandler={()=>null} />
      )}
    </div>
  </li>;
};

FavoritesLocations.propTypes = {
  favoritesList: PropTypes.arrayOf(offerTypes).isRequired
};

export default FavoritesLocations;
