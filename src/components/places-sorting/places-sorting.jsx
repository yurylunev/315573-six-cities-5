import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {onSortingTypeChange} from "../../store/action";
import withToggle from "../hocs/with-toggle/with-toggle";
import withItemSelection from "../hocs/with-item-selection/with-item-selection";

const sortingTypes = [
  {type: `popular`, sortText: `Popular`},
  {type: `low_to_high`, sortText: `Price: low to high`},
  {type: `high_to_low`, sortText: `Price: high to low`},
  {type: `top_rated`, sortText: `Top rated first`}
];

const PlacesSorting = (props) => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0" onClick={props.handleToggleOpen}>&nbsp;
      {sortingTypes[props.selectedId].sortText}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul className={`places__options places__options--custom${props.isOpen ? ` places__options--opened` : ``}`}>
      {sortingTypes.map((type, i) => (
        <li className={`places__option${i === 0 ? ` places__option--active` : ``}`}
          tabIndex="0"
          key={type.type + type.sortText}
          onClick={() => {
            props.handleChangeSelectedId(() => props.onSortingChange(type.type), i);
            props.handleToggleOpen();
          }}>
          {type.sortText}
        </li>
      ))}
    </ul>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  onSortingChange: (sortingType) => {
    dispatch(onSortingTypeChange(sortingType));
  }
});

PlacesSorting.propTypes = {
  onSortingChange: PropTypes.func,
  selectedId: PropTypes.number.isRequired,
  handleToggleOpen: PropTypes.func.isRequired,
  handleChangeSelectedId: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export {PlacesSorting};
export default connect(null, mapDispatchToProps)(withItemSelection(withToggle(PlacesSorting)));
