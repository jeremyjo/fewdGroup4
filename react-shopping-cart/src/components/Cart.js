import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { ADD_PRODUCT_BASKET } from '../actions/types';
import berry from '../images/berry.jpeg';
import fish from '../images/fish.jpeg';
import flower from '../images/flower.jpeg';
import peper from '../images/peper.jpeg';

function Cart(props) {
    // console.log(basketProps);
    let productsInCart = [];
    console.debug(props.basketProps)
  Object.keys(props.basketProps.products).forEach(function(item){
      console.log(item);
      console.log(props.basketProps.products[item].inCart);
      if(props.basketProps.products[item].inCart){
          productsInCart.push(props.basketProps.products[item].inCart)
      }
      console.log(productsInCart);
  } );
  
  const productImages =[berry,fish,flower,peper];

  productsInCart = productsInCart.map( (product, index) => {
    console.log("my products is");
    console.log(product);
    return(
        <Fragment>
            <div className="product"> <img src={productImages[index]}/>
                <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price},00</div>
            <div className="quantity">
                <span>{product.numbers}</span>
            </div>
            <div className="total">${product.numbers * product.price},00</div>

        </Fragment>
    )
  });
  
  return (
        // <div>
        //     <h1>This is a cart page</h1>
        // </div>
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">Product</h5>
                <h5 className="price sm-hide">Price</h5>
                <h5 className="quantity">Quantity</h5>
                <h5 className="total">Total</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{props.basketProps.cartCost},00</h4>
            </div>


        </div>
    )
}
const mapStateToProps = state =>({
    basketProps : state.basketState
});
export default connect(mapStateToProps)(Cart);
