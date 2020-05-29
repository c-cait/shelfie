import React from 'react';
import './Product.css';


function Product(props) {
    return(
        <div className='product-container'>
            <div>Product: {props.item.name}</div>
            <div>Price: ${props.item.price}</div>
            <img src={props.item.img} className='product-img'></img>

        </div>
    )
}

export default Product;