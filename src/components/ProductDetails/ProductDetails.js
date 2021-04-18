import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/product';



const ProductDetails = (props) => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);

    return (
        <div>
            <h1>This is Product Detalis component{productKey}
          <Product showAddToCart = {false} product={product}></Product>
            </h1>
        </div>
    )
};

export default ProductDetails;