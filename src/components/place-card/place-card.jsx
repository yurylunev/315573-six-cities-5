import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerTypes} from "../../mocks/offers.proptypes";

const PlaceCard = (props) => {
  const {properties, images, price, ratingStars, features, isFavoritesList} = props.card;
  const type = props.type;
  const imageSize = (type === `favorites__card`)
    ? {width: 150, height: 110}
    : {width: 260, height: 200};
  return (
    <article className={`${type} place-card`} onMouseMove={()=>props.moveHandler(props.card)}>
      {(properties.mark) ?
        <div className="place-card__mark">
          <span>{properties.mark}</span>
        </div>
        : null}
      <div className={`${type.split(`__`)[0]}__image-wrapper place-card__image-wrapper`}>
        <Link to="/offer/2">
          <img className="place-card__image" src={images[0]}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"/>
        </Link>
      </div>
      <div className={(isFavoritesList) ? `favorites__card-info place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price.currency}{price.value}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;{price.period}</span>
          </div>
          <button className={`place-card__bookmark-button ` + ((properties.isBookmark) ? `place-card__bookmark-button--active ` : ``) + `button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{(properties.isBookmark) ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(ratingStars * 20)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/4">{properties.name}</Link>
        </h2>
        <p className="place-card__type">{features.entire}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: offerTypes,
  moveHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default PlaceCard;
