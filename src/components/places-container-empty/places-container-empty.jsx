import React from "react";
import PropTypes from "prop-types";

const PlacesContainerEmpty = (props) => (
  <div className="cities__places-container cities__places-container--empty container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment
            in {props.cityName}</p>
      </div>
    </section>
    <div className="cities__right-section"/>
  </div>
);

PlacesContainerEmpty.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default PlacesContainerEmpty;
