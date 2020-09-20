export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (newFeature) => {
  return {
    type: REMOVE_FEATURE,
    payload: newFeature,
  };
};
