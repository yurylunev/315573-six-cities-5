import React from 'react';
import {offersListTypes} from "../../mocks/offers.proptypes";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import FavoritesLocations from "../favorites-location/favorites-location";

const Favorites = (props) => {
  const favoritesList = props.placesList;
  const favoritesCities = new Set(favoritesList.map((card)=>card.city));
  if (favoritesList.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81"
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...favoritesCities].map((cityName, i) =>
                <FavoritesLocations key={i} favoritesList={favoritesList.filter((offer)=>offer.city === cityName)}/>
              )}
            </ul>
          </section>
        </div>
      </main>;
      <footer className="footer">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = offersListTypes;

export default Favorites;
