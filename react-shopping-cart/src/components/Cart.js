import React from 'react'
import {connect} from 'react-redux';
function Cart(basketProps) {
    console.log({basketProps});
    let productsInCart =[];
    // console.log(Object.keys(basketProps.products));

   //here don't know


    return (
        <div>
            <h1>This is a cart page</h1>
        </div>
    )
}
const mapStateToProps = state =>({
    basketProps : state.basketState
});
export default connect(mapStateToProps)(Cart);
