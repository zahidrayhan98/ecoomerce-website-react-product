import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,ratings,quantity,price}=props.product;
   const handleToCart =props.handleToCart

    return (
        <div className='product'>
          <img src={img} alt="" /> 
         <div className='product-info'>
         <h6 className='product-name'>{name}</h6> 
          <p>${price}</p>
          <p>Manufacture:{seller}</p>
          <p>Ratings:{ratings} stars</p>
          
         </div>
         <button onClick={()=>handleToCart(props.product)} className='add-cart'>
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;