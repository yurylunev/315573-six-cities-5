import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerTypes} from "../../mocks/offers.proptypes";
import PlaceCardInfo from "../place-card-info/place-card-info";

const PlaceCard = (props) => {
  const {properties, images, price, ratingStars, features, isFavoritesList} = props.card;

  return (
    <article className="cities__place-card place-card" onMouseMove={()=>props.moveHandler(props.card)}>
      {(properties.mark) ?
        <div className="place-card__mark">
          <span>{properties.mark}</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer/2">
          <img className="place-card__image" src={images[0]}
            width="260"
            height="200"
            alt="Place image"/>
        </Link>
      </div>
      <PlaceCardInfo
        price={price} isBookmark={properties.isBookmark}
        ratingStars={ratingStars} cardName={properties.name}
        cardType={features.entire} isFavoritesList={isFavoritesList}/>
    </article>
  );
};

PlaceCard.propTypes = {
  card: offerTypes,
  moveHandler: PropTypes.func.isRequired
};

export default PlaceCard;
