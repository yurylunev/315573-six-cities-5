import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Cards = [
  {
    mark: `Premium`,
    image: `img/room.jpg`,
    currency: `&euro;`,
    price: 120,
    isBookmark: false,
    rating: 80,
    name: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`
  },
  {
    image: `img/apartment-01.jpg`,
    currency: `&euro;`,
    price: 80,
    isBookmark: true,
    rating: 80,
    name: `Wood and stone place`,
    type: `Private room`
  },
  {
    image: `img/apartment-02.jpg`,
    currency: `&euro;`,
    price: 132,
    isBookmark: false,
    rating: 80,
    name: `Canal View Prinsengracht`,
    type: `Apartment`
  },
  {
    mark: `Premium`,
    image: `img/apartment-03.jpg`,
    currency: `&euro;`,
    price: 180,
    isBookmark: false,
    rating: 100,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  },
  {
    image: `img/room.jpg`,
    currency: `&euro;`,
    price: 80,
    isBookmark: false,
    rating: 80,
    name: `Wood and stone place`,
    type: `Private room`
  }

];

ReactDOM.render(
    <App placesList={Cards} />,
    document.getElementById(`root`)
);
