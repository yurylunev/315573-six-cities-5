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
  const {mark, image, price, isBookmark, rating, name, type} = props.dataPlaceCard;

  return (
    <article className="cities__place-card place-card">
      <PlaceCardMark mark={mark} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image}
            width="260"
            height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmarks isBookmark={isBookmark} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
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
    mark: PropTypes.string,
    image: PropTypes.string.isRequired,
    currency: PropTypes.string,
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rating: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
};

export default PlaceCard;
