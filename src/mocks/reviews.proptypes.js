import PropTypes from "prop-types";

const reviewTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  reviewTime: PropTypes.string,
  ratingStars: PropTypes.number,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  reviewText: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
});

const reviewsTypes = PropTypes.arrayOf(reviewTypes);

export {reviewTypes, reviewsTypes};
