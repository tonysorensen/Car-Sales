import React from "react";
import { addFeature } from "../actions/addFeature";
const AdditionalFeature = (props) => {
  console.log("props in additonalFeature", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
