import PropTypes from "prop-types";

const PropertiesType = PropTypes.shape({
  mark: PropTypes.string,
  name: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired
});

const FeaturesType = PropTypes.shape({
  entire: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  adults: PropTypes.string.isRequired
});

const PriceType = PropTypes.shape({
  currency: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
});

const HostType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
});

const InsideListType = PropTypes.array;
const DescriptionType = PropTypes.array;

const OfferTypes = PropTypes.shape({
  offerId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  Properties: PropertiesType.isRequired,
  ratingStars: PropTypes.number,
  Features: FeaturesType.isRequired,
  Price: PriceType.isRequired,
  InsideList: InsideListType.isRequired,
  Host: HostType.isRequired,
  Description: DescriptionType.isRequired,
  Gps: PropTypes.array.isRequired
});

const OffersListTypes = {
  placesList: PropTypes.arrayOf(OfferTypes)
};

export {FeaturesType, PriceType, InsideListType, HostType, DescriptionType, OfferTypes, OffersListTypes};
