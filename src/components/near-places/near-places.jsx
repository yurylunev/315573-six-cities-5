import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PlaceCardInfo from "../place-card-info/place-card-info";

const NearPlaces = (props) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          props.placesList.map((placeCard, i)=>(
            <article key={i} className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <Link to="/offer/3">
                  <img className="place-card__image" src={placeCard.image} width="260" height="200"
                    alt="Place image"/>
                </Link>
              </div>
              <PlaceCardInfo
                price={placeCard.Price} isBookmark={placeCard.isBookmark}
                ratingStars={placeCard.ratingStars} cardName={placeCard.cardName}
                cardType={placeCard.entire} isFavoritesList={false}/>
            </article>
          ))
        }
      </div>
    </section>
  </div>
);

NearPlaces.propTypes = {
  placesList: PropTypes.array.isRequired
};

export default NearPlaces;
