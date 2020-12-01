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
import {getCities, getCurrentCity, getFavorites, getOffers, getOffersByCity} from "../../store/selectors";
import {Header} from "../header/header";

const Main = (props) => {
  const {currentCity, cities, onCityChange, offers} = props;
  return (
    <>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList clickHandler={onCityChange} cities={cities} currentCity={currentCity}/>
            </section>
          </div>
          <div className="cities">
            {offers.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                  <PlacesSorting/>
                  <PlacesList type={`cities__place-card`} placesList={offers} moveHandler={props.changeActiveCard}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map placesList={offers.map((offer)=>({offerId: offer.offerId, gps: offer.gps, cityLocation: offer.cityLocation, zoom: offer.zoom, currentCity: props.currentCity}))}/>
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
  changeActiveCard: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(changeCity(city));
  },
  changeActiveCard(activeCard) {
    dispatch(changeActiveCard(activeCard));
  }
});

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  cities: getCities(state),
  favoritesList: getFavorites(state),
  currentCity: getCurrentCity(state),
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
