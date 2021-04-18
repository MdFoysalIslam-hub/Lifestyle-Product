import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
       processOrder();
    }

    const removeProduct = (productkey) => {
const newCart = cart.filter(product => product.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
}

    useEffect(()=> {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
const product = fakeData.find(product => product.key === key);
        product.quantity = savedCart[key];
            return product;
        });
     setCart(cartProducts);
    }, []);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""></img>
    }
     
    return (
        <div className="twin-container">
          <div className="product-container">
           {
               cart.map(product=> <ReviewItem 
                key={product.key}
                removeProduct = {removeProduct}
                product={product}></ReviewItem>)
           }
         {thankyou}
           </div>
           <div className="cart-container">
           <Cart cart={cart}>
               <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
           </Cart>
           </div>
        </div>
    );
};
export default Review;