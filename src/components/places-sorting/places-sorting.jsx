import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const sortingTypes = [
  {type: `popular`, sortText: `Popular`},
  {type: `low_to_high`, sortText: `Price: low to high`},
  {type: `high_to_low`, sortText: `Price: high to low`},
  {type: `top_rated`, sortText: `Top rated first`}
];

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentSortingTypeID: 0,
    };

    this._handleSortingTypeClick = this._handleSortingTypeClick.bind(this);
    this._handleListItemClick = this._handleListItemClick.bind(this);
  }

  _handleSortingTypeClick() {
    this.setState(() => ({isOpen: !this.state.isOpen}));
  }

  _handleListItemClick(callback, currentSortingTypeID) {
    callback();
    this.setState(() => ({isOpen: false, currentSortingTypeID}));
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleSortingTypeClick}>&nbsp;
          {sortingTypes[this.state.currentSortingTypeID].sortText}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom${this.state.isOpen ? ` places__options--opened` : ``}`}>
          {sortingTypes.map((type, i) => (
            <li className={`places__option${i === 0 ? ` places__option--active` : ``}`}
              tabIndex="0"
              key={type.type + type.sortText}
              onClick={() => this._handleListItemClick(this.props.onSortingChange.bind(null, type.type), i)}>
              {type.sortText}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSortingChange: (sortingType) => {
    dispatch(ActionCreator.onSortingTypeChange(sortingType));
  }
});

PlacesSorting.propTypes = {
  onSortingChange: PropTypes.func
};

export {PlacesSorting};
export default connect(null, mapDispatchToProps)(PlacesSorting);
