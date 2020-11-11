import React from "react";
import PropTypes from "prop-types";
import {OfferTypes} from "../../mocks/offers.proptypes";
import PlaceCardInfo from "../place-card-info/place-card-info";

const PlaceCard = (props) => {
  const {Properties, Images, Price, ratingStars, Features, isFavoritesList} = props.card;

  return (
    <article className="cities__place-card place-card" onMouseMove={props.moveHandler}>
      {(Properties.mark) ?
        <div className="place-card__mark">
          <span>{Properties.mark}</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={Images[0]}
            width="260"
            height="200"
            alt="Place image"/>
        </a>
      </div>
      <PlaceCardInfo
        price={Price} isBookmark={Properties.isBookmark}
        ratingStars={ratingStars} cardName={Properties.name}
        cardType={Features.entire} isFavoritesList={isFavoritesList}/>
    </article>
  );
};

PlaceCard.propTypes = {
  card: OfferTypes,
  moveHandler: PropTypes.func.isRequired
};

export default PlaceCard;
