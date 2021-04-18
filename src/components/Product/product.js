import React from 'react';
import { Link } from 'react-router-dom';


import './product.css';
const Product =(props) => {
 //console.log(props.name);
const {img, name, seller, price, stock, key} = (props.product);
    return (
        <div className="product">
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { props.showAddToCart === true && <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}>Add to card<i className="fas fa-shopping-cart"></i></button>}
            </div>
            
        </div>
    );
};

export default Product;