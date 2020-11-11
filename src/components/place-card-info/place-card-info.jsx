import React from "react";
import PropTypes from "prop-types";
import PlaceCardPrice from "../place-card-price/place-card-price";
import PlaceCardName from "../place-card-name/place-card-name";
import PlaceCardBookmark from "../place-card-bookmark/place-card-bookmark";

const PlaceCardInfo = (props) => {
  const {price, isBookmark, ratingStars, cardName, cardType, isFavoritesList} = props;

  return <div className={(isFavoritesList) ? `favorites__card-info place-card__info` : `place-card__info`}>
    <div className="place-card__price-wrapper">
      <PlaceCardPrice price={price} />
      <PlaceCardBookmark isBookmark={isBookmark} />
    </div>
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${Math.round(ratingStars * 20)}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
    <PlaceCardName placeCardName={cardName} />
    <p className="place-card__type">{cardType}</p>
  </div>;
};

PlaceCardInfo.propTypes = {
  price: PropTypes.number.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  ratingStars: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  isFavoritesList: PropTypes.bool.isRequired
};

export default PlaceCardInfo;
