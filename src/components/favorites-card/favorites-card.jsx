import React from "react";
import {Link} from "react-router-dom";
import {OfferTypes} from "../../mocks/offers.proptypes";
import PlaceCardInfo from "../place-card-info/place-card-info";

const FavoritesCard = (props) => {
  const {Price, ratingStars, Features, Properties, Images} = props.card;

  return <article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to="/offer/1">
        <img className="place-card__image" src={Images[0]} width="150" height="110"
          alt="Place image" />
      </Link>
    </div>
    <PlaceCardInfo
      price={Price} isBookmark={Properties.isBookmark}
      ratingStars={ratingStars} cardName={Properties.name}
      cardType={Features.entire} isFavoritesList={true}/>
  </article>;
};

FavoritesCard.propTypes = {
  card: OfferTypes
};

export default FavoritesCard;
