import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart]=useState([])
    const handleToCart=(product)=>{
       const newCart=[...cart , product]
       setCart(newCart)
       addToDb(product.id)
    }
  
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(()=>{
        console.log("products",products)
        const storedCart=getShoppingCart();
        const savedCart=[];
        // get id using loop
        for (const id in storedCart){
            // console.log(id)
            // step:2::: get the product using id
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                // step 3:added quantity
                const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            // step 4: add the addedProduct
            savedCart.push(addedProduct)

            }
            // set quantity of the product
            
            console.log(addedProduct)


        }
        // set the cart
        setCart(savedCart)
    },[products])
        
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
               <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;