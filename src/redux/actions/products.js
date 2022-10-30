import { CLEAR, SEARCH, GET } from "../types"
import * as api from "../../api"
export const searchAction = (search, prods) => async (dispatch) => {
    console.log(search, prods);
    try {

        const filter = await prods.filter((prod) => (
            prod.trackingId == search
        ))

        dispatch({ type: SEARCH, filter })
    }
    catch (err) {
        console.log(err);
    }
}
export const searchClear = (products) => async (dispatch) => {
    console.log(products);
    try {
        await dispatch({ type: CLEAR, products })
    }
    catch (err) {
        console.log(err);
    }
}
export const getSale = (page) => async (dispatch) => {
    try {
        const { data } = await api.getSales(page)
        console.log("Fetching From Redux", data);
        await dispatch({ type: GET, data })
    }
    catch (err) {
        console.log(err);
    }
}