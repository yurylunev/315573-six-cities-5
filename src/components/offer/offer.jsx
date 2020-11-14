import React from "react";
import {offerTypes} from "../../mocks/offers.proptypes";
import Reviews from "../../mocks/reviews";
import nearPlacesList from "../../mocks/near-places-list";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyMark from "../property-mark/property-mark";
import PropertyName from "../property-name/property-name";
import PropertyStars from "../property-stars/property-stars";
import PropertyFeatures from "../property-features/property-features";
import PropertyPrice from "../property-price/property-price";
import PropertyInside from "../property-inside/property-inside";
import PropertyHost from "../property-host/property-host";
import PropertyReviews from "../property-reviews/property-reviews";
import PropertyMap from "../property-map/property-map";
import NearPlaces from "../near-places/near-places";

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
            <PropertyGallery images={offer.images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {(offer.properties.mark !== undefined) ? <PropertyMark /> : null}
              <PropertyName name={offer.properties.name}/>
              <PropertyStars stars={offer.ratingStars}/>
              <PropertyFeatures features={offer.features}/>
              <PropertyPrice price={offer.price}/>
              <PropertyInside insideList={offer.insideList}/>
              <PropertyHost host={offer.host} description={offer.description}/>
              <PropertyReviews reviews={Reviews}/>
            </div>
          </div>
          <PropertyMap/>
        </section>
        <NearPlaces placesList={nearPlacesList}/>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: offerTypes
};

export default Offer;
