import { ADMIN_GET_ALL_PRODUCT } from "../../actions/AdminAction";

const initialState = {
    adminGetAllProductLoading: false,
    adminGetAllProductResult: false,
    adminGetAllProductError: false,
    
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
        default:
            return state;
    }
}

export default AdminReducer