import React, { FC, useContext } from "react";
import { AppContext } from "./context/context";
import { Inventory, productReducer, ProductType,  Types } from "./context/reducer";


const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const {products} = state;
  
  const ProductButton:FC = (props) => {
    return (
      <>
        <button
          onClick={() => {
            dispatch({
              type: Types.Add,
            });
          }}
        >
          click
        </button>
        
      </>
    );
  }

  const ProductsGrid: FC = (props) => {
    
    return (
      <div className="product_grid">
        <h2>Product Grid </h2>

        {products.map((product) => {
          return (
            <>
              <div className="product_card" key={product.id}>
                <h2>{product.name}</h2>
                <div>{product.description}</div>
                <span>{product.price}</span>
              </div>
              <ProductButton/>
            </>
          );
        })}
      </div>
    );
      }

    return(<ProductsGrid/>)
      
    
  
  }
  


export default Products;
