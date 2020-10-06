import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {placesList} = props;

  return (
    <MainScreen placesList={placesList}/>
  );
};

App.propTypes = {
  placesList: PropTypes.array.isRequired
};

export default App;
