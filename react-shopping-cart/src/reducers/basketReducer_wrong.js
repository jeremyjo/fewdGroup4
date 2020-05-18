import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
            berry:{
                name: "Berries",
                price: 4.00,
                numbers: 0,
                inCart:false
            },
            fish:{
                name: "Fish",
                price: 9.00,
                numbers: 0,
                inCart:false
            },
            flower:{
                name: "Flowers",
                price: 6.00,
                numbers: 0,
                inCart:false
            },
            peper:{
                name: "Pepers",
                price: 1.00,
                numbers: 0,
                inCart:false
            }

    }
}

export default (state = initialState, action) => {
    switch(action.type){
        
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload]};
            // console.log(addQuantity);
            addQuantity.numbers += 1;
            addQuantity.inCart =true;
            console.log(addQuantity);


            return{
                // ...state,
                basketNumbers: state.basketNumbers + 1,
                // cartCost: state.cartCost + state.products[action.payload].price,
                // products: {
                //     ...state.products,
                //     [action.payload]: addQuantity
                // }

            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        default:
            return state;
    }
}