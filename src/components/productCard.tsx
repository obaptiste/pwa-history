import React, { FC, ReactElement } from "react"; 
import styles from '../styles/productcard.module.scss';
import {Product} from '../types/productType';
import {ProductButton} from '../Products';	


let productStyle = {
    productCard: styles.productCard,
    productImage: styles.productImage,
    productInfo: styles.productInfo,
    productName: styles.productName,    
    productPrice: styles.productPrice,    
    productDescription: styles.productDescription,
}; 
interface ProductCardProps {
    product: Product;
    ProductButton: ReactElement;
}

 
const ProductCard:FC<(ProductCardProps)> = ({product, ProductButton}) => {
    const {name, price, image} = product;
    return  (
        <>
    <div className={styles.productCard} id={`${product.id}`}>
        <div className={styles.productImage}>
            <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>{product.price}</div>
        </div>
    </div>
    </>
    );
}

export default ProductCard;