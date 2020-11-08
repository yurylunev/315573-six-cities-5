import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

const App = (props) => {
  const {placesList} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesList={placesList}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route path="/offer/:id" exact component={Room}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.shape({
    offerId: PropTypes.number.isRequired,
    Images: PropTypes.arrayOf(PropTypes.string).isRequired,
    Properties: PropTypes.shape({
      mark: PropTypes.string,
      name: PropTypes.string.isRequired,
      isBookmark: PropTypes.bool.isRequired
    }).isRequired,
    ratingStars: PropTypes.number,
    Features: PropTypes.shape({
      entire: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired
    }).isRequired,
    Price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    InsideList: PropTypes.array.isRequired,
    Host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      userName: PropTypes.string.isRequired
    }),
    Description: PropTypes.array.isRequired,
    Gps: PropTypes.array.isRequired
  }))
};

export default App;
