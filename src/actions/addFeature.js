export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (newFeature) => {
  console.log("action fired");
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};
