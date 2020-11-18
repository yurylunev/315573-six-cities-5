import React from "react";
import {Link} from "react-router-dom";
import {offerTypes} from "../../mocks/offers.proptypes";
import PlaceCardInfo from "../place-card-info/place-card-info";

const FavoritesCard = (props) => {
  const {price, ratingStars, features, properties, images} = props.card;

  return <article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to="/offer/1">
        <img className="place-card__image" src={images[0]} width="150" height="110"
          alt="Place image" />
      </Link>
    </div>
    <PlaceCardInfo
      price={price} isBookmark={properties.isBookmark}
      ratingStars={ratingStars} cardName={properties.name}
      cardType={features.entire} isFavoritesList={true}/>
  </article>;
};

FavoritesCard.propTypes = {
  card: offerTypes
};

export default FavoritesCard;
