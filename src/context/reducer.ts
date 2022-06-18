type ActionMap<M extends { [index: string]: any }> = {
[Key in keyof M]: M[Key] extends undefined
? {
    type: Key;
}: {
    type:Key;
    payload: M[Key];
}
};

export enum Types {
    Create = 'CREATE_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Add = 'ADD_PRODUCT',
}

type ProductType = {
    id: number;
    name:string;
    price: number;
}

type ProductPayLoad = {
    [Types.Create] : {
        id:number;
        name:string;
        price: number;
    };
    [Types.Delete]: {
        id: number;
    }
}

export type ProductActions = ActionMap<ProductPayLoad>[keyof ActionMap<ProductPayLoad>];

export const productReducer = (state: ProductType[], action:ProductActions | ShoppingCartActions) => {
    switch (action.type) {
        case Types.Create:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                }
            ]
            case Types.Delete:
            return [
                ...state.filter(product => product.id !== action.payload.id),
            ]
            default:
                return state;
    }
}

type ShoppingCartPayLoad = {
    [Types.Add]: undefined;
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayLoad>[keyof ActionMap<ShoppingCartPayLoad>];


export const shoppingCartReducer = (state:number, action:ProductActions | ShoppingCartActions) => {
    switch (action.type) {
        case Types.Add:
            return state + 1;
            default:
                return state;
    }
} 
