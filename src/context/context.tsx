import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { productReducer, shoppingCartReducer, ProductActions, ShoppingCartActions } from "./reducer";

type ProductType = {
  [x: string]: ReactNode;
  id: number;
  name: string;
  price: number;
  description?:string;
  quantity?: number;
  category?: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [{
    "id": 201,
    "name": "FaceMaskOne",
    "image": "/images/pic1.jpg",
    "price": 5.0,
    "category": "basic",
    "quantity": 5
  },
  {
    "id": 202,
    "name": "FaceMaskOne",
    "image": "/images/pic2.jpg",
    "price": 6.0,
    "category": "basic",
    "quantity": 5
  },
  {
    "id": 203,
    "name": "FaceMaskOne",
    "image": "/images/pic3.jpg",
    "price": 11.0,
    "category": "full" ,
    "quantity": 5
  },
  {
    "id": 204,
     "name": "FaceMaskOne",
     "image": "/images/pic4.jpg",
     "price": 120.0,
     "category": "full" ,
     "quantity": 5
    },
  {
    "id": 205,
    "name": "FaceMaskOne",
    "image": "/images/pic5.jpg",
    "price": 8.0,
    "category": "half" ,
    "quantity": 5
  }],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface AppContextProps {
    children?: React.ReactNode;
}

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const AppProvider: React.FC<AppContextProps> = ({ children }:AppContextProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
