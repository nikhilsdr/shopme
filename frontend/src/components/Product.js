import React from 'react';
//import {Link} from 'react-router-dom';
import Rating from './Rating';


const product=(props)=>{

    const { product } = props;
    return(
        <div key={product._id} className="card">
        <a href={ `/product/${product._id} ` }>
            <img src={product.image} alt='productImage'/>
        </a>
        <div className="card-body">
            <a href={ `/product/${product._id} ` }>
                <h1>{product.name}</h1>
            </a>

            <Rating key={product._id} rating={product.rating} numreviews={product.numreviews}></Rating>

            <div className="card-price">
            ${product.price}
            </div>
        </div>
    </div>
    )

}

export default product;