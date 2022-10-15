import { AUTH, DONE, LOG_OUT, PENDING, SINGLE_USER } from "../types"
import * as api from "../../api"

import toast from "react-hot-toast"

export const signin = (formData, router) => async (dispatch) => {

    try {
        dispatch({ type: PENDING })
        const { data } = await api.signin(formData)
        dispatch({ type: AUTH, data })
        dispatch({ type: DONE })
        toast.success(`Welcome ${data.result.name}...!!`)
        router("/")
        console.log(data);
    }
    catch (err) {
        dispatch({ type: DONE })
        toast.error("sign in failed")
        console.log(err.message);
    }
}
export const getUser = (id) => async (dispatch) => {
    console.log(id);
    try {
        dispatch({ type: PENDING })
        const { data } = await api.getSingleUser(id)
        console.log(data);
        dispatch({ type: SINGLE_USER, data })
    }
    catch (err) {
        console.log(err);
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        dispatch({ type: PENDING })
        const { data } = await api.signup(formData)
    }
    catch (err) {
        console.log(err);
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: PENDING })
        dispatch({ type: LOG_OUT })
        dispatch({ type: DONE })
        toast.success("Goodbye...👋🏻")
    }
    catch (err) {
        console.log(err.message);
    }
}
