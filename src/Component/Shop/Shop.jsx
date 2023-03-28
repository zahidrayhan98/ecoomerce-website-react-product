import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart]=useState([])
    const handleToCart=(product)=>{
       const newCart=[...cart , product]
       setCart(newCart)
    }
        
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleToCart={handleToCart}

                    >

                    </Product>)
                }

            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>selected Items:{cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;