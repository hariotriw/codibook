import { KATALOG_ALL_PRODUCT, ADD_ITEM_TO_CART } from "../../actions/UserAction";

const initialState = {
    katalogAllProductLoading: false,
    katalogAllProductResult: false,
    katalogAllProductError: false,

    addItemToCartLoading: false,
    addItemToCartResult: false,
    addItemToCartError: false,
    
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case KATALOG_ALL_PRODUCT:
            return {
                ...state,
                katalogAllProductLoading: action.payload.loading,
                katalogAllProductResult: action.payload.data,
                katalogAllProductError: action.payload.errorMessage
            }
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                addItemToCartLoading: action.payload.loading,
                addItemToCartResult: action.payload.data,
                addItemToCartError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default UserReducer