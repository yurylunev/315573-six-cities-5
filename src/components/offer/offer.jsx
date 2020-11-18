import React from "react";
import {offerTypes} from "../../mocks/offers.proptypes";
import Reviews from "../../mocks/reviews";
import nearPlacesList from "../../mocks/near-places-list";
import PropertyReviews from "../property-reviews/property-reviews";
import Map from "../map/map";
import PlaceCard from "../place-card/place-card";

const Offer = (props) => {
  const {offer} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81"
                  height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((img, i)=>{
                  return <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={`/${img}`} alt="Photo studio"/>
                  </div>;
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {(offer.properties.mark !== undefined) &&
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
                <span className="property__rating-value rating__value">4.8</span>
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
              <PropertyReviews reviews={Reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map placesList={nearPlacesList}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nearPlacesList.map((placeCard)=>(
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

export default Offer;
