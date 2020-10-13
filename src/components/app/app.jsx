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
  placesList: PropTypes.array.isRequired
};

export default App;
