import React from "react";
import PlaceCard from "../place-card/place-card";
import {OffersListTypes} from "../../mocks/offers.proptypes";

class Places extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.placesList.map((place, i) => {
        return <PlaceCard
          key={i}
          card={place}
          moveHandler={() => {
            this.setState({activeCard: place});
          }}
        />;
      })}
    </div>;
  }
}

Places.propTypes = OffersListTypes;

export default Places;
