import React from "react";
import PropTypes from "prop-types";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";

const LocationsList = (props) => {
  const {cities, currentCity, clickHandler} = props;
  return <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li key={city.cityId} className="locations__item" onClick={() => clickHandler(city)}>
        <a className={
          `locations__item-link tabs__item${city.cityName === currentCity ? ` tabs__item--active` : ``}`
        } href="#">
          <span>{city.cityName}</span>
        </a>
      </li>))}
  </ul>;
};

LocationsList.propTypes = {
  cities: citiesTypes,
  currentCity: cityTypes,
  clickHandler: PropTypes.func.isRequired
};

export default LocationsList;
