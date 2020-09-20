import React from "react";
import { addFeature } from "../actions/addFeature";
const AddedFeature = (props) => {
  console.log("props in addedfeature", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
