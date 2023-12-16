import { ADDPRODUCT } from "./actions"

export const addProduct = (product) => {
    return {
        type: ADDPRODUCT,
        payload: product
    }
}