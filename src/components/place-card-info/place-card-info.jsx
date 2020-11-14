import React from "react";
import PropTypes from "prop-types";
import PlaceCardPrice from "../place-card-price/place-card-price";
import PlaceCardName from "../place-card-name/place-card-name";
import PlaceCardBookmark from "../place-card-bookmark/place-card-bookmark";
import PlaceCardRating from "../place-card-rating/place-card-rating";
import {priceType} from "../../mocks/offers.proptypes";

const PlaceCardInfo = (props) => {
  const {price, isBookmark, ratingStars, cardName, cardType, isFavoritesList} = props;

  return <div className={(isFavoritesList) ? `favorites__card-info place-card__info` : `place-card__info`}>
    <div className="place-card__price-wrapper">
      <PlaceCardPrice price={price} />
      <PlaceCardBookmark isBookmark={isBookmark} />
    </div>
    <PlaceCardRating stars={ratingStars}/>
    <PlaceCardName placeCardName={cardName} />
    <p className="place-card__type">{cardType}</p>
  </div>;
};

PlaceCardInfo.propTypes = {
  price: priceType.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  ratingStars: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  isFavoritesList: PropTypes.bool
};

export default PlaceCardInfo;
