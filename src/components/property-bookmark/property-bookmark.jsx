import React from "react";

const PropertyBookmark = () => (
  <button className="property__bookmark-button button" type="button">
    <svg className="property__bookmark-icon" width="31" height="33">
      <use xlinkHref="#icon-bookmark"/>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default PropertyBookmark;
