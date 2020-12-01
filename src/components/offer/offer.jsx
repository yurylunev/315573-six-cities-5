import React from "react";
import {offerTypes} from "../../mocks/offers.proptypes";
import PropertyReviews from "../property-reviews/property-reviews";
import Map from "../map/map";
import PlaceCard from "../place-card/place-card";
import {connect} from "react-redux";
import {getOfferById} from "../../store/selectors";
import Header from "../header/header";

const Offer = (props) => {
  const {offer} = props;
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((img, i)=>{
                  return <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={`${img}`} alt="Photo studio"/>
                  </div>;
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {(offer.properties.mark !== ``) &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.properties.name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(offer.ratingStars * 20)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.ratingStars}</span>
              </div>
              <ul className="property__features">{
                Object.keys(offer.features).map((featureName, i)=>(
                  <li key={i} className={`property__feature property__feature--${featureName}`}>
                    {offer.features[featureName]}
                  </li>)) }
              </ul>
              <div className="property__price">
                <b className="property__price-value">{offer.price.currency}{offer.price.value}</b>
                <span className="property__price-text">&nbsp;{offer.price.period}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.insideList.map((inside, i)=>(
                      <li key={i} className="property__inside-item">{inside}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={offer.host.isPro
                      ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                      : `property__avatar-wrapper property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatar}
                      width="74" height="74" alt="host avatar"/>
                  </div>
                  <span className="property__user-name">{offer.host.userName}</span>
                </div>
                <div className="property__description">{
                  offer.description.map((text, i)=>(<p key={i} className="property__text">{text}</p>))
                }
                </div>
              </div>
              <PropertyReviews reviews={[]}/>
            </div>
          </div>
          <section className="property__map map">
            <Map placesList={[]}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                [].map((placeCard)=>(
                  <PlaceCard type={`near-places__card`} key={placeCard.offerId}
                    card={placeCard}
                    moveHandler={()=>null} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: offerTypes
};

const mapStateToProps = (state) => ({
  offer: getOfferById(state),
});

export {Offer};
export default connect(mapStateToProps)(Offer);
