import React, { useState } from 'react';
import berry from '../images/berry.jpeg';
import fish from '../images/fish.jpeg';
import flower from '../images/flower.jpeg';
import peper from '../images/peper.jpeg';
import { connect } from 'react-redux';
import { addBasket} from '../actions/addAction';

// create functional component 

// this is for clicking on items 
const Home = (props) => {
   console.log(props); 


return(
    <div className="container">
        <div className="image">
            <img  src={berry} alt="berries"  width="200"/>
            <h3>Berries</h3>
            <h3>$4.00</h3>
            <a onClick= {() => props.addBasket('berry')}  className="addToCart cart1" href="#">Add to cart</a>
        </div>
        <div className="image">
            <img  src={fish} alt="fish" width="400" />
            <h3>Fish</h3>
            <h3>$9.00</h3>
            <a onClick= {() => props.addBasket('fish')}   className="addToCart cart2" href="#">Add to cart</a>
        </div>
        <div className="image">
            <img  src={flower} alt="flower" width="200" />
            <h3>Flowers</h3>
            <h3>$6.00</h3>
            <a onClick= {() => props.addBasket('flower')}   className="addToCart cart3" href="#">Add to cart</a>
        </div>
        <div className="image">
            <img  src={peper} alt="pepper"  width="390"/>
            <h3>Pepers</h3>
            <h3>$1.00</h3>
            <a onClick= {() => props.addBasket('peper')}   className="addToCart cart4" href="#">Add to cart</a>
        </div>
        <h1> current Numbers in cart  </h1>

    </div>
);

}

export default connect(null,{addBasket}) (Home);