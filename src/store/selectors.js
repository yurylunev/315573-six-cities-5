import {createSelector} from "reselect";
import {NameSpace} from "./reducers/root-reducer";
import options from "../mocks/options";

export const getOffersRaw = (state) => state[NameSpace.DATA];

export const getOffers = createSelector(
    getOffersRaw,
    (offers) => offers.map((offer)=>({
      offerId: offer.id,
      city: offer.city.name,
      images: offer.images,
      properties: {
        mark: offer.is_premium ? `Premium` : null,
        name: offer.title,
        isBookmark: false,
      },
      ratingStars: offer.rating,
      popularity: offer.rating,
      features: {
        entire: offer.type,
        bedrooms: `${offer.bedrooms} Bedrooms`,
        adults: `Max ${offer.rating} adults`,
      },
      price: Object.assign({}, options.price, {value: offer.price}),
      insideList: offer.goods,
      host: {
        avatar: offer.avatar_url,
        isPro: offer.is_pro,
        userName: offer.name,
        id: offer.id,
      },
      description: [offer.description],
      gps: [offer.city.location.latitude, offer.city.location.longitude],
      zoom: offer.city.location.zoom,
    })));

export const getCurrentCity = (state) => state[NameSpace.STATE].currentCity;

export const getCities = createSelector(
    getOffersRaw,
    (offers) => Array.from(new Set(offers[NameSpace.DATA].map((offer) => offer.city.name)))
        .map((city)=>({cityName: city}))
);

export const getFavorites = createSelector(
    getOffersRaw,
    (offers) =>
      offers.filter((offer) => !!offer.properties.isBookmark)
);

export const getOffersByCity = createSelector(
    getOffersRaw,
    getCurrentCity,
    (offers, currentCityName) =>
      offers.filter((offer) => offer.city === currentCityName)
);

