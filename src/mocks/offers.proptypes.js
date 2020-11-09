import PropTypes from "prop-types";

const OfferTypes = PropTypes.shape({
  offerId: PropTypes.number.isRequired,
  Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  Properties: PropTypes.shape({
    mark: PropTypes.string,
    name: PropTypes.string.isRequired,
    isBookmark: PropTypes.bool.isRequired
  }).isRequired,
  ratingStars: PropTypes.number,
  Features: PropTypes.shape({
    entire: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired
  }).isRequired,
  Price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  InsideList: PropTypes.array.isRequired,
  Host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
  }),
  Description: PropTypes.array.isRequired,
  Gps: PropTypes.array.isRequired
});

const OffersListTypes = {
  placesList: PropTypes.arrayOf(OfferTypes)
};

export {OfferTypes, OffersListTypes};
