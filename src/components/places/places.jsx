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
      {this.props.placesList.map((Card, i) => {
        return <PlaceCard
          key={i}
          Card={Card}
          moveHandler={() => {
            this.setState({activeCard: Card});
          }}
        />;
      })}
    </div>;
  }
}

Places.propTypes = OffersListTypes;

export default Places;
