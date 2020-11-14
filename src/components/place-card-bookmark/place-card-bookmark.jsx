import React from "react";
import PropTypes from "prop-types";

const PlaceCardBookmark = (props) => {
  const {isBookmark} = props;

  return (
    <button className={`place-card__bookmark-button ` + ((isBookmark) ? `place-card__bookmark-button--active ` : ``) + `button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{(isBookmark) ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

PlaceCardBookmark.propTypes = {
  isBookmark: PropTypes.bool.isRequired
};

export default PlaceCardBookmark;
