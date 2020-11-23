import PropTypes from "prop-types";

const cityTypes = PropTypes.shape({
  cityName: PropTypes.string.isRequired,
  cityId: PropTypes.number.isRequired
});

const citiesTypes = PropTypes.arrayOf(cityTypes);

export {cityTypes, citiesTypes};
