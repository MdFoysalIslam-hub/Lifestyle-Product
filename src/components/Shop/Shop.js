import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
const first10 = fakeData.slice(0,100);
const [products, setProducts] = useState(first10);
const [cart, setCart] = useState([]);

useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map( existingkey =>{
        const product = fakeData.find(product => product.key === existingkey);
        product.quantity = savedCart[existingkey];
        return product;
    })
   setCart(previousCart);
},[])
const handleAddProduct = (product) =>{ 
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(product => product.key === toBeAddedKey);
  let count = 1;
  let newCart;
    if(sameProduct){
       count = sameProduct.quantity + 1;
       sameProduct.quantity = count;
       const others = cart.filter(product =>product.key !== toBeAddedKey)
        newCart = [...others, sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
}

    return (
    <div className="twin-container">
        <div className="product-container">
            {
                products.map(product => <Product
                 key={product.key}
                 showAddToCart = {true}
                 handleAddProduct ={handleAddProduct}
                 product = {product}
                 ></Product>)
            }               
        </div>
            <div className="cart-container">
              <Cart cart = {cart}>
              <Link to="/review"><button className="main-button">Review Order</button></Link>
              </Cart>
            </div>
    </div>
    );
};

export default Shop;