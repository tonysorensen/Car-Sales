import { ADD_FEATURE } from "../actions/addFeature";
import { REMOVE_FEATURE } from "../actions/removeFeature";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const stateReducer = (state = initialState, action) => {
  // console.log("stateReducer state", state);
  switch (action.type) {
    case ADD_FEATURE:
      console.log("action payload", action.payload);
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: [
          ...state.additionalFeatures.filter(
            (feature) => feature !== action.payload
          ),
        ],
        additionalPrice: state.additionalPrice + action.payload.price,
      };
    case REMOVE_FEATURE:
      console.log("action payload from remove", action.payload, state);
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(
              (feature) => feature !== action.payload
            ),
          ],
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price,
      };

    default:
      return state;
  }
};
