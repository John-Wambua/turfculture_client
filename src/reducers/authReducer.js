import {
    SIGN_IN, SIGN_UP,
    FORGOT_PASS, RESET_PASS,
    GET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_PASS
} from "../actions/types";

export default  (state={}, action)=>{
    switch (action.type){
        //email and pass
        case SIGN_IN:
            return action.payload
        case SIGN_UP:
            return action.payload
        //email
        case FORGOT_PASS:
            return action.payload
        case RESET_PASS:
            return action.payload
        case GET_CURRENT_USER:
            return action.payload
        case UPDATE_CURRENT_USER:
            return action.payload
        case UPDATE_CURRENT_USER_PASS:
            return action.payload
        default:
            return state
    }
}