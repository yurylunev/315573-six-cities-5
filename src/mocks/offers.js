import options from "./options";

const offers = [
  {
    offerId: 1,
    cityId: 4,
    city: `Amsterdam`,
    images: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      mark: `Premium`,
      name: `Beautiful & luxurious studio at great location`,
      isBookmark: false
    },
    ratingStars: 4.8,
    popularity: 10,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 120}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.3909553943508, 4.85309666406198],
  },
  {
    offerId: 2,
    cityId: 4,
    city: `Amsterdam`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      name: `Wood and stone place`,
      isBookmark: true
    },
    ratingStars: 4.6,
    popularity: 90,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 80}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.369553943508, 4.85309666406198],
  },
  {
    offerId: 3,
    cityId: 4,
    city: `Amsterdam`,
    images: [`img/apartment-02.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      name: `Canal View Prinsengracht`,
      isBookmark: false
    },
    ratingStars: 4.4,
    popularity: 80,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 132}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.3909553943508, 4.929309666406198],
  },
  {
    offerId: 4,
    cityId: 4,
    city: `Amsterdam`,
    images: [`img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      mark: `Premium`,
      name: `Nice, cozy, warm big bed apartment`,
      isBookmark: true
    },
    ratingStars: 5,
    popularity: 70,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 180}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.3809553943508, 4.939309666406198],
  },
  {
    offerId: 5,
    cityId: 4,
    city: `Amsterdam`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      name: `Wood and stone place`,
      isBookmark: false
    },
    ratingStars: 4,
    popularity: 60,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 120}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.3809553943508, 4.939309666406198],
  },
  {
    offerId: 6,
    cityId: 2,
    city: `Cologne`,
    images: [`img/apartment-small-04.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    properties: {
      name: `White castle`,
      isBookmark: true
    },
    ratingStars: 5,
    popularity: 50,
    features: {entire: `Apartment`, bedrooms: `3 Bedrooms`, adults: `Max 4 adults`},
    price: Object.assign({}, options.price, {value: 180}),
    insideList: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`],
    host: {avatar: `img/avatar-angelina.jpg`, isPro: true, userName: `Angelina`},
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    gps: [52.38333, 4.9],
  }
];

export default offers;
