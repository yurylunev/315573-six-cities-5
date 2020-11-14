import Options from "./options";

const NearPlacesList = [
  {
    id: 1,
    image: `img/room.jpg`,
    mark: `Premium`,
    cardName: `Wood and stone place`,
    isBookmark: true,
    ratingStars: 4.5,
    entire: `Private room`,
    Price: Object.assign(Options.Price, {value: 80}),
    Gps: [52.38333, 4.9],
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
    Price: Object.assign(Options.Price, {value: 132}),
    Gps: [52.38333, 4.9],
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
    Price: Object.assign(Options.Price, {value: 180}),
    Gps: [52.38333, 4.9],
    offerId: 1
  }
];

export default NearPlacesList;
