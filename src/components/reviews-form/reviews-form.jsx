import React from "react";

class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      reviewTime: (new Date()),
      ratingStars: 0,
      User: {
        name: `User`,
        avatar: `img/avatar.svg`
      },
      reviewText: ``,
      offerId: 1
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFormChange = this._handleFormChange.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  _handleFormChange(e) {
    e.preventDefault();
    switch (e.target.name) {
      case `rating`: this.setState({ratingStars: e.target.value}); break;
      case `review`: this.setState({reviewText: e.target.value}); break;
    }
  }

  render() {
    return <form onSubmit={this._handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [`terribly`, `badly`, `not bad`, `good`, `perfect`].map((title, i)=>(
            <React.Fragment key={5 - i}>
              <input onChange={this._handleFormChange} className="form__rating-input visually-hidden" name="rating" value={5 - i}
                id={`${5 - i}-stars`} type="radio"/>
              <label htmlFor={`${5 - i}-stars`}
                className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>))
        }
      </div>
      <textarea onChange={this._handleFormChange} className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span
            className="reviews__star">rating</span> and describe your stay with at
          least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled="">Submit
        </button>
      </div>
    </form>;
  }
}

export default ReviewsForm;
