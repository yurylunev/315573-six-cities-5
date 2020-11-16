import React from 'react';
import PropTypes from "prop-types";
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewsItem from "../reviews-item/reviews-item";

const PropertyReviews = (props) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span
      className="reviews__amount">{props.reviews.length}</span></h2>
    <ul className="reviews__list">
      {
        props.reviews.map((review, i)=>(
          <ReviewsItem key={i}
            userAvatar={review.user.avatar}
            userName={review.user.name}
            ratingStars={review.ratingStars}
            reviewText={review.reviewText}
            reviewTime={review.reviewTime}/>
        ))
      }
    </ul>
    <ReviewsForm/>
  </section>
);

PropertyReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default PropertyReviews;
