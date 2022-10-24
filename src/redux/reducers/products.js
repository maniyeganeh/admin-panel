import { SEARCH, CLEAR, GET } from "../types"
const INITIAL_STATE = {
    prods: [],

}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SEARCH:

            return { ...state, prods: action.filter }
        case GET:
            return { ...state, prods: action.data }
        case CLEAR:

            return { ...state, prods: action.products }
        default:
            return state
    }

}