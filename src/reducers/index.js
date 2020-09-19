import { combineReducers } from "redux";

import { carReducer } from "./carReducer";
import { additionFeaturesReducer } from "./additionalFeaturesReducer";
import { additionalPriceReducer } from "./additionalPriceReducer.js";
export const rootReducer = combineReducers({
  carReducer,
  additionFeaturesReducer,
  additionalPriceReducer,
});
