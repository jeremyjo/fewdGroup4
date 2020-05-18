import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import berry from '../images/berry.jpeg';
import fish from '../images/fish.jpeg';
import flower from '../images/flower.jpeg';
import peper from '../images/peper.jpeg';

function Cart(basketProps) {
    console.log(basketProps);

    let productsInCart =[];

    Object.keys(basketProps.products).forEach(function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });
    const productImages =[berry,fish,flower,peper];

    productsInCart = productsInCart.map((product,index) => {
        console.log("my product is ");
        console.log(product);
        return (
            <Fragment>
                <div className="product"> <img src={productImages[index]} /> 
        <span  className="sm-hide">{product.name}</span>  
                </div>
        <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <span>{product.numbers}</span>
                </div>
                <div className="total">${product.number * product.price},00</div>
                
            </Fragment>
        )
    })

    return (
        <div>
            <h1>This is the cart page</h1>
        </div>
    )
}
const mapStateTopProps = state =>({
    basketProps : state.basketState
});
export default connect (mapStateTopProps)(Cart);
