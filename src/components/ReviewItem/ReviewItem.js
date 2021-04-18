import React from 'react';

const ReviewItem = (props) =>{
const {name, quantity, price, img, stock, key} = props.product;
const ReviewItemStyle={
    borderBottom:'5px solid lightgray',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft: '200px'

};
    
    
    return(
        <div style={ReviewItemStyle}>
         
            <h4 className="product-name">{name}</h4>
            <img src={img} alt=""></img>
            <p>Product Quenity :{quantity}</p>
           <p>Stock in : {stock}</p>
            <h4>Price : {price}</h4>
            <button
            className="main-button"
            onClick={() =>props.removeProduct(key)}
            > Remove</button>


        </div>
    );
};
export default ReviewItem