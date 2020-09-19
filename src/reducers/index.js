import { combineReducers } from "redux";

import { carReducer } from "./carReducer";
import { additionalFeaturesReducer } from "./additionalFeaturesReducer";
import { additionalPriceReducer } from "./additionalPriceReducer.js";
export const rootReducer = combineReducers({
  carReducer,
  additionalFeaturesReducer,
  additionalPriceReducer,
});
