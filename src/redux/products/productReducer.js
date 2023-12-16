/* eslint-disable no-case-declarations */

import { ADDPRODUCT, ADDTOCART, QUANTITYADD, QUANTITYREMOVE, REMOVEFROMCART } from "./actions";
const initialState ={
    products:[],
    cart:[]
}
const maxId = (products) => {
    return  products.reduce((max,product)=>Math.max(max,product.id),0)+1

}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case ADDPRODUCT:
            return {
                ...state,
                products: [...state.products, { ...action.payload ,id:maxId(state.products)}]
            }
        case ADDTOCART:
         const isExist = state.cart.find(product=>product.id===action.payload.id)
            if(isExist){
                return {
                    ...state,
                    cart: state.cart.map(product=>product.id===action.payload.id?{...product,quantity:product.quantity+1}:product)

                }
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart ,{...action.payload,quantity:1}]

                }
            }
        case REMOVEFROMCART:
            return{
                ...state,
                cart:state.cart.filter(product=>product.id!==action.payload.id)
            }
        case QUANTITYREMOVE:
            return{
                ...state,
                cart:state.cart.map(product=>product.id===action.payload.id?{...product,quantity:product.quantity-1}:product)
            }
        case QUANTITYADD:
            return{
                ...state,
                cart:state.cart.map(product=>product.id===action.payload.id?{...product,quantity:product.quantity+1}:product)
            }    

        default:
            return state;
    }
}

export default productReducer;