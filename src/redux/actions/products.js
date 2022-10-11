import { CLEAR, SEARCH } from "../types"

export const searchAction = (search, prods) => async (dispatch) => {
    console.log(search, prods);
    try {

        const filter = await prods.filter((prod) => (
            prod.id == search
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