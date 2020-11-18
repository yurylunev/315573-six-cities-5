import React from 'react';
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewsItem from "../reviews-item/reviews-item";
import {reviewsTypes} from "../../mocks/reviews.proptypes";

const PropertyReviews = (props) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span
      className="reviews__amount">{props.reviews.length}</span></h2>
    <ul className="reviews__list">
      {
        props.reviews.map((review)=>(
          <ReviewsItem key={review.id} review={review}/>
        ))
      }
    </ul>
    <ReviewsForm/>
  </section>
);

PropertyReviews.propTypes = reviewsTypes;

export default PropertyReviews;
