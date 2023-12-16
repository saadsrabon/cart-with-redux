import { ADDTOCART } from "./actionTypes"

export const  addToCart =(product) => {
    return {
        type: ADDTOCART,
        payload: product
    }
}