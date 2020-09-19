const initialState = {
  additionalPrice: 0,
};

export const additionalPriceReducer = (state = initialState, action) => {
  console.log("additionalPriceReducer", state);
  return state;
};
