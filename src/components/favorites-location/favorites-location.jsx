import React from "react";
import FavoritesCard from "../favorites-card/favorites-card";
import PropTypes from "prop-types";
import {OfferTypes} from "../../mocks/offers.proptypes";

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
      {favoritesList.map((card, i)=>{
        return <FavoritesCard key={i} card={card}/>;
      })}
    </div>
  </li>;
};

FavoritesLocations.propTypes = {
  favoritesList: PropTypes.arrayOf(OfferTypes).isRequired
};

export default FavoritesLocations;
