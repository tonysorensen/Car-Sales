import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  console.log("props from Total", props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state from mapStateToProps in Total", state);
  return {
    price: state.carReducer.car.price,
    additionalPrice: state.additionalPriceReducer.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(Total);
