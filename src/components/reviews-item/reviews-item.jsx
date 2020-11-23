import React from 'react';
import {reviewTypes} from "../../mocks/reviews.proptypes";

const ReviewsItem = (props) => {
  const {userAvatar, userName, ratingStars, reviewText, reviewTime} = props.review;
  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={userAvatar}
          width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{userName}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${Math.round(ratingStars * 20)}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{reviewText}</p>
      <time className="reviews__time" dateTime={reviewTime}>{
        new Intl.DateTimeFormat(`en-US`, {year: `numeric`, month: `long`})
                    .format(new Date(`${reviewTime}T00:00:00.000Z`))
      }</time>
    </div>
  </li>;
};

ReviewsItem.propTypes = {
  review: reviewTypes
};

export default ReviewsItem;
