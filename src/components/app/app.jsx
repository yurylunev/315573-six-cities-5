import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {offersListTypes} from "../../mocks/offers.proptypes";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";
import {getCities, getFavorites, getOffers, getCurrentCity} from "../../store/selectors";

const App = (props) => {
  console.log({props});
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={props.offers} cities={props.cities}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites placesList={props.favoritesList}/>
        </Route>
        <Route exact path="/offer/:id">
          <Offer offer={props.offers[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersListTypes.placesList,
  cities: citiesTypes,
  currentCity: cityTypes,
  favoritesList: offersListTypes
};

const mapStateToProps = (state) => ({
    offers: getOffers(state),
    cities: getCities(state),
    favoritesList: getFavorites(state),
    currentCity: getCurrentCity(state),
});

export {App};
export default connect(mapStateToProps)(App);
