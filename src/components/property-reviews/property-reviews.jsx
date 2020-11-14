import React from 'react';
import PropTypes from "prop-types";
import ReviewsForm from "../reviews-form/reviews-form";

const PropertyReviews = (props) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span
      className="reviews__amount">{props.reviews.length}</span></h2>
    <ul className="reviews__list">
      {
        props.reviews.map((review, i)=>(
          <li key={i} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.user.avatar}
                  width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${Math.round(review.ratingStars * 20)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.reviewText}</p>
              <time className="reviews__time" dateTime={review.reviewTime}>{
                new Intl.DateTimeFormat(`en-US`, {year: `numeric`, month: `long`})
                    .format(new Date(`${review.reviewTime}T00:00:00.000Z`))
              }</time>
            </div>
          </li>
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
