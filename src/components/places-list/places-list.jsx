import React from "react";
import PlaceCard from "../place-card/place-card";
import {offersListTypes} from "../../mocks/offers.proptypes";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
    this.type = props.type;
    this._moveHandler = this._moveHandler.bind(this);
  }
  _moveHandler(place) {
    this.setState({activeCard: place});
  }
  render() {
    const type = this.type;
    return <div className={`cities__places-list places__list tabs__content`}>
      {this.props.placesList.map((place, i) => {
        return <PlaceCard
          key={place.offerId}
          card={place}
          moveHandler={this._moveHandler}
          type={type}
        />;
      })}
    </div>;
  }
}

PlacesList.propTypes = offersListTypes;

export default PlacesList;
