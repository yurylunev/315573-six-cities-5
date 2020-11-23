import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {offersListTypes} from "../../mocks/offers.proptypes";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";

const App = (props) => {
  const {offers, cities, currentCity} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} cities={cities} currentCity={currentCity}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites placesList={offers.filter((place) => place.properties.isBookmark)}/>
        </Route>
        <Route exact path="/offer/:id">
          <Offer offer={offers[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersListTypes.placesList,
  cities: citiesTypes,
  currentCity: cityTypes
};

const mapStateToProps = (state) => {

  return Object.assign({}, state, {
    offers: state.offers,
    cities: state.cities
  });
};

export {App};
export default connect(mapStateToProps)(App);
