import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {offersListTypes} from "../../mocks/offers.proptypes";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";
import {getCities, getFavorites, getOffers} from "../../store/selectors";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={getOffers} cities={getCities}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites placesList={getFavorites}/>
        </Route>
        <Route exact path="/offer/:id">
          <Offer offer={getOffers[0]}/>
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
    STATE: {offers: getOffers,
      cities: getCities,
      favoritesList: getFavorites
    }
  });
};

export {App};
export default connect(mapStateToProps)(App);
