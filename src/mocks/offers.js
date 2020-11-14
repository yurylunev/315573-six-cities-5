import Options from "./options";

const Offers = [
  {
    offerId: 1,
    city: `Amsterdam`,
    Images: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      mark: `Premium`,
      name: `Beautiful & luxurious studio at great location`,
      isBookmark: false
    },
    ratingStars: 4.8,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 120}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  },
  {
    offerId: 2,
    city: `Amsterdam`,
    Images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      name: `Wood and stone place`,
      isBookmark: true
    },
    ratingStars: 4.6,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 80}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  },
  {
    offerId: 3,
    city: `Amsterdam`,
    Images: [`img/apartment-02.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      name: `Canal View Prinsengracht`,
      isBookmark: false
    },
    ratingStars: 4.4,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 132}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  },
  {
    offerId: 4,
    city: `Amsterdam`,
    Images: [`img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      mark: `Premium`,
      name: `Nice, cozy, warm big bed apartment`,
      isBookmark: true
    },
    ratingStars: 5,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 180}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  },
  {
    offerId: 5,
    city: `Amsterdam`,
    Images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      name: `Wood and stone place`,
      isBookmark: false
    },
    ratingStars: 4,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 120}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  },
  {
    offerId: 6,
    city: `Cologne`,
    Images: [`img/apartment-small-04.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    Properties: {
      name: `White castle`,
      isBookmark: true
    },
    ratingStars: 5,
    Features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    Price: Object.assign({}, Options.Price, {value: 180}),
    InsideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    Host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    Description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    Gps: [52.38333, 4.9],
  }
];

export default Offers;
