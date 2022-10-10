import { CLEAR, SEARCH } from "../types"

export const searchAction = (search, prods) => async (dispatch) => {
    console.log(search, prods);
    try {

        const filter = await prods.filter((prod) => (
            prod.id == search
        ))
        console.log(filter);
        dispatch({ type: SEARCH, filter })
    }
    catch (err) {
        console.log(err);
    }
}
export const searchClear = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR })
    }
    catch (err) {
        console.log(err);
    }
}