import React, { useContext } from "react";
import { AppContext } from "./context/context";
import { Types } from "./context/reducer";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const {products} = state;

  const ProductCard
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
