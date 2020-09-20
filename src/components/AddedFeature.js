import React from "react";
import { removeFeature } from "../actions/removeFeature";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  console.log("props in addedfeature", props);
  const handleClick = (e) => {
    e.preventDefault();
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
