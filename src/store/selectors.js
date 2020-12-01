import {createSelector} from "reselect";
import {NameSpace} from "./reducers/root-reducer";
import options from "../mocks/options";
import {AuthorizationStatus} from "../const";

export const getOffersRaw = (state) => state[NameSpace.DATA].offers;

export const getUserInfo = (state) => state[NameSpace.USER].userName;
export const isAuthorizedUser = (state) => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;

export const getCurrentOfferId = () => location.pathname.split(`/`).reverse()[0];

export const getOffers = createSelector(
    getOffersRaw,
    (offers) => offers.map((offer)=>({
      offerId: offer.id,
      city: offer.city.name,
      images: offer.images,
      properties: {
        mark: offer.is_premium ? `Premium` : ``,
        name: offer.title,
        isBookmark: false,
      },
      ratingStars: offer.rating,
      popularity: offer.rating,
      features: {
        entire: offer.type,
        bedrooms: `${offer.bedrooms} Bedrooms`,
        adults: `Max ${offer.max_adults} adults`,
      },
      price: Object.assign({}, options.price, {value: offer.price}),
      insideList: offer.goods,
      host: {
        avatar: offer.host.avatar_url,
        isPro: offer.host.is_pro,
        userName: offer.host.name,
        id: offer.host.id,
      },
      description: [offer.description],
      cityLocation: [offer.city.location.latitude, offer.city.location.longitude],
      gps: [offer.location.latitude, offer.location.longitude],
      zoom: offer.city.location.zoom,
    }))
);

export const getCurrentCity = (state) => state[NameSpace.STATE].currentCity.cityName;

export const getCities = createSelector(
    getOffersRaw,
    (offers) => Array.from(new Set(offers.map((offer) => offer.city.name)))
        .map((city, i)=>({cityId: i, cityName: city}))
);

export const getFavorites = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => !!offer.properties.isBookmark)
);

export const getOffersByCity = createSelector(
    getOffers,
    getCurrentCity,
    (offers, currentCityName) => offers.filter((offer) => offer.city === currentCityName)
);

export const getOfferById = createSelector(
    getOffers,
    getCurrentOfferId,
    (offers, id) => offers.find((offer) => offer.offerId === +id)
);
