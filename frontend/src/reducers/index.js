import { combineReducers } from "redux";
import AuthReducer from "./auth";
import AdminReducer from "./admin";


export default combineReducers({
    // disini reducers
    AuthReducer,
    AdminReducer

})