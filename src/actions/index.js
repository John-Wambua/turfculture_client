import turfculture from "../apis/turfculture";
import {
    SIGN_OUT, SIGN_IN, SIGN_UP,
    FORGOT_PASS, RESET_PASS,
    GET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_PASS
} from "./types";


//AUTHENTICATION

export const signUp =formValues =>async dispatch=>{
    const response = await turfculture.post('/users/signup',formValues);
    dispatch ({ type: SIGN_UP, payload: response.data })
}
export const signIn =formValues =>async dispatch=>{
    const response = await turfculture.post('/users/login',formValues);
    dispatch ({ type: SIGN_IN, payload: response.data })
}
export const forgotPassword =formValues =>async dispatch=>{
    const response = await turfculture.post('/users/forgotPassword',formValues);
    dispatch ({ type: FORGOT_PASS, payload: response.data })
}
export const resetPassword =(token,formValues) =>async dispatch=>{
    const response = await turfculture.patch(`/users/resetPassword/${token}`,formValues);
    dispatch ({ type: RESET_PASS, payload: response.data })
}
export const getCurrentUser =authToken =>async dispatch=>{
    const response = await turfculture.get('/users/me',{
        headers: { 'Authorization': `Bearer ${authToken}`}
    });
    dispatch ({ type: GET_CURRENT_USER, payload: response.data })
}
export const updateCurrentUser =(authToken,formValues) =>async dispatch=>{
    const response = await turfculture.patch('/users/updateMe',formValues,{
        headers: { 'Authorization': `Bearer ${authToken}`}
    });
    dispatch ({ type: UPDATE_CURRENT_USER, payload: response.data })
}
export const updateUserPass =(authToken,formValues) =>async dispatch=>{
    const response = await turfculture.patch('/users/updateMyPassword',formValues,{
        headers: { 'Authorization': `Bearer ${authToken}`}
    });
    dispatch ({ type: UPDATE_CURRENT_USER_PASS, payload: response.data })
}