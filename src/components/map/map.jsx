import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {offerTypes} from "../../mocks/offers.proptypes";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  _addMarkers(offers) {
    const {activeCard} = this.props;
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const defaultIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((offer) => {
      this.markers.push(
          leaflet.marker(offer.gps, {icon: offer.offerId === activeCard.offerId ? activeIcon : defaultIcon})
      );
    });
    this.markers.forEach((marker) => {
      marker.addTo(this.map);
    });
  }

  _removeMarkers() {
    this.markers.forEach((marker) => {
      marker.remove();
    });
    this.markers = [];
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);
    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);
    if (this.props.activeCard.offerId !== undefined) {
      this._addMarkers(this.props.placesList);
    }
  }

  componentDidUpdate() {
    const center = [52.38333, 4.9];
    this.map.setView(center, 12);

    if (this.props.activeCard.offerId !== undefined) {
      this._removeMarkers();
      this._addMarkers(this.props.placesList);
    }

  }
  render() {
    return <div id="map" style={{height: `100%`}}/>;
  }
}

Map.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.shape({
    gps: PropTypes.array.isRequired,
    offerId: PropTypes.number.isRequired
  })).isRequired,
  activeCard: offerTypes
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard
});

export {Map};
export default connect(mapStateToProps)(Map);
