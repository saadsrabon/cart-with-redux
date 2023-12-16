import { ADDPRODUCT, ADDTOCART, QUANTITYADD, QUANTITYREMOVE, REMOVEFROMCART, } from "./actions"


export const addProduct = (product) => {
    return {
        type: ADDPRODUCT,
        payload: product
    }
}

export const addToCart = (product) => {
    return {
        type: ADDTOCART,
        payload: product
    }
}
export const removeFromCart = (product) => {
    return {
        type: REMOVEFROMCART,
        payload: product
    }
}
export const quantityRemove = (product) => {
    return {
        type: QUANTITYREMOVE,
        payload: product
    }
}
export const quantityAdd = (product) => {
    return {
        type: QUANTITYADD,
        payload: product
    }
}