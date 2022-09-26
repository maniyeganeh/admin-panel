import { DARK_MODE, LIGHT_MODE, TOGGLE } from "../types"

const INITIAL_STATE = {
    darkMode: false
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case DARK_MODE:
            return { ...state, darkMode: action.payload }
        case LIGHT_MODE:
            return { ...state, darkMode: action.payload }
        case TOGGLE:
            return { ...state, darkMode: action.payload }
        default:
            return state
    }
}