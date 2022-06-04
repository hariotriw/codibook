import { LOGIN_ACTION, LOGIN_STATUS, GET_DATA_USER } from "../../actions/AuthenticationAction";

const initialState = {
    loginActionLoading: false,
    loginActionResult: false,
    loginActionError: false,

    // getDataUserLoading: false,
    // getDataUserResult: false,
    // getDataUserError: false,

    // loginStatusLoading: false,
    loginStatusResult: false,
    // loginStatusError: false
    
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA_USER:
            return {
                ...state,
                getDataUserLoading: action.payload.loading,
                getDataUserResult: action.payload.data,
                getDataUserError: action.payload.errorMessage
            }
        case LOGIN_ACTION:
            return {
                ...state,
                loginActionLoading: action.payload.loading,
                loginActionResult: action.payload.data,
                loginActionError: action.payload.errorMessage
            }
        case LOGIN_STATUS:
            return {
                ...state,
                loginStatusResult: action.payload.data,
            }
        default:
            return state;
    }
}

export default AuthReducer