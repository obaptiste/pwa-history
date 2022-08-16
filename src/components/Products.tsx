import React, { FC, useContext } from "react";
import { AppContext } from "../context/context";
import { ProductType,  Types } from "../context/reducer";

interface productButtonProps {
  product: ProductType
} 

export const ProductButton  = (product:productButtonProps) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: product
          });
          console.log(product.product.id)
        }}
      >
        click
      </button>
      
    </>
  );
}
const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const {products} = state;
  

  const ProductsGrid: FC = (props) => {
    
    return (
      <div className="product_grid">
        <h2>Product Grid </h2>

        {products.map((product, key) => {
          return (
              <li className="product_card" key={Math.random()+ product.id}>
                <h2>{product.name}</h2>
                <div>{product.description}</div>
                <p>{product.price}</p>
                <ProductButton product={product}/>
              </li>
          );
        })}
      </div>
    );
      }

    return(<ProductsGrid/>)
      
    
  
  }
  


export default Products;
