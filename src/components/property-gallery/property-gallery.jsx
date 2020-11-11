import React from "react";
import PropTypes from "prop-types";

const PropertyGallery = (props) =>
  (<div className="property__gallery">
    {
      props.images.map((img, i)=>{
        return <div key={i} className="property__image-wrapper">
          <img className="property__image" src={`/${img}`} alt="Photo studio"/>
        </div>;
      })
    }
  </div>);

PropertyGallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default PropertyGallery;
