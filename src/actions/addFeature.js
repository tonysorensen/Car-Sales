export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (added_feature) => {
  return {
    type: ADD_FEATURE,
    payload: added_feature,
  };
};
