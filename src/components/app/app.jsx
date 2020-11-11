import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {OffersListTypes} from "../../mocks/offers.proptypes";

const App = (props) => {
  const {placesList} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesList={placesList} />
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites placesList={placesList.filter((place) => place.Properties.isBookmark)} />
        </Route>
        <Route exact path="/offer/:id">
          <Room offer={placesList[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = OffersListTypes;

export default App;
