import { ADDPRODUCT } from "./actions";
const initialState ={
    products:[]
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case ADDPRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}

export default productReducer;