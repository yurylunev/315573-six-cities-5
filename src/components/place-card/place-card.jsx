import React from "react";
import PropTypes from "prop-types";

const Bookmarks = (props) => {
  const {isBookmark} = props;

  return (
    <button className={`place-card__bookmark-button ` + ((isBookmark) ? `place-card__bookmark-button--active ` : ``) + `button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{(isBookmark) ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

const PlaceCardMark = (props) => {
  const {mark} = props;

  if (mark) {
    return (
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
    );
  } else {
    return <React.Fragment />;
  }
};

const PlaceCard = (props) => {
  const {Properties, Images, Price, ratingStars, Features} = props.dataPlaceCard;

  return (
    <article className="cities__place-card place-card">
      <PlaceCardMark mark={Properties.mark} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={Images[0]}
            width="260"
            height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{Price.currency}{Price.value}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;{Price.period}</span>
          </div>
          <Bookmarks isBookmark={Properties.isBookmark} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(ratingStars * 20)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{Properties.name}</a>
        </h2>
        <p className="place-card__type">{Features.entire}</p>
      </div>
    </article>
  );
};

Bookmarks.propTypes = {
  isBookmark: PropTypes.bool.isRequired
};

PlaceCardMark.propTypes = {
  mark: PropTypes.string
};

PlaceCard.propTypes = {
  dataPlaceCard: PropTypes.shape({
    Images: PropTypes.arrayOf(PropTypes.string).isRequired,
    Properties: PropTypes.shape({
      mark: PropTypes.string,
      name: PropTypes.string.isRequired,
      isBookmark: PropTypes.bool.isRequired
    }).isRequired,
    Price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    ratingStars: PropTypes.number,
    Features: PropTypes.shape({
      entire: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired
    }).isRequired
  })
};

export default PlaceCard;
