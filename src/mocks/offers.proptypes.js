import PropTypes from "prop-types";

const propertiesType = PropTypes.shape({
  mark: PropTypes.string,
  name: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired
});

const featuresType = PropTypes.shape({
  entire: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  adults: PropTypes.string.isRequired
});

const priceType = PropTypes.shape({
  currency: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
});

const hostType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
});

const insideListType = PropTypes.array;
const descriptionType = PropTypes.array;

const offerTypes = PropTypes.shape({
  offerId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  properties: propertiesType.isRequired,
  ratingStars: PropTypes.number,
  features: featuresType.isRequired,
  price: priceType.isRequired,
  insideList: insideListType.isRequired,
  host: hostType.isRequired,
  description: descriptionType.isRequired,
  gps: PropTypes.array.isRequired
});

const offersListTypes = {
  placesList: PropTypes.arrayOf(offerTypes)
};

export {featuresType, priceType, insideListType, hostType, descriptionType, offerTypes, offersListTypes};
