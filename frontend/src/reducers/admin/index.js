import { ADMIN_GET_ALL_PRODUCT,  ADMIN_GET_ALL_ORDER } from "../../actions/AdminAction";

const initialState = {
    adminGetAllProductLoading: false,
    adminGetAllProductResult: false,
    adminGetAllProductError: false,
    
    adminGetAllOrderLoading: false,
    adminGetAllOrderResult: false,
    adminGetAllOrderError: false,
    
}

const AdminReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_GET_ALL_PRODUCT:
            return {
                ...state,
                adminGetAllProductLoading: action.payload.loading,
                adminGetAllProductResult: action.payload.data,
                adminGetAllProductError: action.payload.errorMessage
            }
        case ADMIN_GET_ALL_ORDER:
            return {
                ...state,
                adminGetAllOrderLoading: action.payload.loading,
                adminGetAllOrderResult: action.payload.data,
                adminGetAllOrderError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default AdminReducer