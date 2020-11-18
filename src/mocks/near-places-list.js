import options from "./options";

const nearPlacesList = [
  {
    id: 1,
    image: `img/room.jpg`,
    mark: `Premium`,
    cardName: `Wood and stone place`,
    isBookmark: true,
    ratingStars: 4.5,
    entire: `Private room`,
    price: Object.assign(options.price, {value: 80}),
    gps: [52.38333, 4.9],
    offerId: 1
  },
  {
    id: 2,
    image: `img/apartment-02.jpg`,
    mark: `Premium`,
    cardName: `Canal View Prinsengracht`,
    isBookmark: false,
    ratingStars: 4.6,
    entire: `Apartment`,
    price: Object.assign(options.price, {value: 132}),
    gps: [52.38333, 4.9],
    offerId: 1
  },
  {
    id: 3,
    image: `img/apartment-03.jpg`,
    mark: `Premium`,
    cardName: `Nice, cozy, warm big bed apartment`,
    isBookmark: false,
    ratingStars: 5,
    entire: `Apartment`,
    price: Object.assign(options.price, {value: 180}),
    gps: [52.38333, 4.9],
    offerId: 1
  }
];

export default nearPlacesList;
