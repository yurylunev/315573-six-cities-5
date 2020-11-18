import React from "react";
import PlaceCard from "../place-card/place-card";
import {offersListTypes} from "../../mocks/offers.proptypes";

class Places extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
    this._moveHandler = this._moveHandler.bind(this);
  }
  _moveHandler(place) {
    this.setState({activeCard: place});
  }
  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.placesList.map((place, i) => {
        return <PlaceCard
          key={i}
          card={place}
          moveHandler={this._moveHandler}
        />;
      })}
    </div>;
  }
}

Places.propTypes = offersListTypes;

export default Places;
