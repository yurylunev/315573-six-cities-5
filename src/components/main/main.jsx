import React from "react";
import PropTypes from "prop-types";
import {offersListTypes} from "../../mocks/offers.proptypes";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import LocationsList from "../locations-list/locations-list";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";
import {connect} from "react-redux";
import {changeCity, changeActiveCard} from "../../store/action";
import PlacesSorting from "../places-sorting/places-sorting";
import PlacesContainerEmpty from "../places-container-empty/places-container-empty";

const Main = (props) => {
  const {currentCity, cities, offers, onCityChange} = props;
  const placesList = offers.filter((place) => place.cityId === currentCity.cityId);

  return (
    <>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
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
                      <span
                        className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList clickHandler={onCityChange} cities={cities} currentCity={currentCity}/>
            </section>
          </div>
          <div className="cities">
            {placesList.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesList.length} places to stay in {currentCity.cityName}</b>
                  <PlacesSorting/>
                  <PlacesList type={`cities__place-card`} placesList={placesList} moveHandler={changeActiveCard}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map placesList={placesList
                    .map((place)=>Object.assign({}, {offerId: place.offerId, gps: place.gps}))}/>
                  </section>
                </div>
              </div>)
              : <PlacesContainerEmpty cityName={currentCity.cityName}/>}
          </div>
        </main>
      </div>
    </>
  );
};

Main.propTypes = {
  offers: offersListTypes.placesList,
  currentCity: cityTypes,
  cities: citiesTypes,
  onCityChange: PropTypes.func.isRequired,
  changeActiveCard: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(changeCity(city));
  },
  changeActiveCard(activeCard) {
    dispatch(changeActiveCard(activeCard));
  }
});

export {Main};
export default connect(null, mapDispatchToProps)(Main);
