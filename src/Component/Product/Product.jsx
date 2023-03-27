import React from 'react'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,ratings,quantity,price}=props.product;

    return (
        <div className='product'>
          <img src={img} alt="" /> 
         <div className='product-info'>
         <h6 className='product-name'>{name}</h6> 
          <p>${price}</p>
          <p>Manufacture:{seller}</p>
          <p>Ratings:{ratings} stars</p>
         </div>
         <button className='add-cart'>Add to cart</button>
        </div>
    );
};

export default Product;