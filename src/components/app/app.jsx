import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createBrowserHistory} from "history";
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {offersListTypes} from "../../mocks/offers.proptypes";
import {citiesTypes, cityTypes} from "../../mocks/cities.proptypes";
import {getFavorites, getOffers, isAuthorizedUser} from "../../store/selectors";
import {SignIn} from "../sign-in/sign-in";

const browserHistory = createBrowserHistory();

const App = ({isAuth, favoritesList}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route
          path="/login"
          exact
          render={() => (isAuth ? <Redirect to={`/`} /> : <SignIn/>)}
        />
        <PrivateRoute
          exact
          path="/favorites"
          render={() => (<Favorites placesList={favoritesList}/>)}
        />
        <Route exact path="/offer/:id">
          <Offer/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: offersListTypes.placesList,
  cities: citiesTypes,
  currentCity: cityTypes,
  favoritesList: offersListTypes,
  isAuth: PropTypes.bool.isRequired,
  getFavorites: offersListTypes
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  favoritesList: getFavorites(state),
  isAuth: isAuthorizedUser(state),
});

export {App};
export default connect(mapStateToProps)(App);
