import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  console.log("props from AddedFeatures", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.length ? (
        <ol type="1">
          {props.features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state from mapStateToProps in Header", state);
  return {
    image: state.carReducer.car.image,
    name: state.carReducer.car.name,
    price: state.carReducer.car.price,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
