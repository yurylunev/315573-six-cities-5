import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);
    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    if (this.props.placesList) {
      this.props.placesList.forEach((offer) => {
        leaflet
            .marker(offer.gps, {icon})
            .addTo(map);
      });
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
  })).isRequired
};

export default Map;
