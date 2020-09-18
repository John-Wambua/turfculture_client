import {combineReducers} from "redux";
import authReducer from "./authReducer";
import facilityReducer from "./facilityReducer";

export default combineReducers({
    auth: authReducer,
    facilities: facilityReducer
})