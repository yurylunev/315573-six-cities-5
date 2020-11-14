import React from "react";
import PropTypes from "prop-types";
import {priceType} from "../../mocks/offers.proptypes";
import {Link} from "react-router-dom";

const PlaceCardInfo = (props) => {
  const {price, isBookmark, ratingStars, cardName, cardType, isFavoritesList} = props;

  return <div className={(isFavoritesList) ? `favorites__card-info place-card__info` : `place-card__info`}>
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">{price.currency}{price.value}&nbsp;</b>
        <span className="place-card__price-text">&#47;&nbsp;{price.period}</span>
      </div>
      <button className={`place-card__bookmark-button ` + ((isBookmark) ? `place-card__bookmark-button--active ` : ``) + `button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">{(isBookmark) ? `In bookmarks` : `To bookmarks`}</span>
      </button>
    </div>
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${Math.round(ratingStars * 20)}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
    <h2 className="place-card__name">
      <Link to="/offer/4">{cardName}</Link>
    </h2>
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
