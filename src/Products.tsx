import React, { useContext } from "react";
import { AppContext } from "./context/context";
import { Types } from "./context/reducer";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;
