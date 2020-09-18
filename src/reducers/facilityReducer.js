import _ from "lodash"
import {
    FETCH_FACILITES,
    FETCH_FACILITY,
    FETCH_FACILITY_STATS
} from "../actions/types";

export default (state={},action)=>{
    switch (action.type){
        case FETCH_FACILITES:
            return {...state, ..._.mapKeys(action.payload,'_id')};
        case FETCH_FACILITY:
            return {...state,[action.payload._id]:action.payload}
        case FETCH_FACILITY_STATS:
            return action.payload;
        default:
            return state;
    }
}