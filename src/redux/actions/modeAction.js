import { DARK_MODE, LIGHT_MODE, TOGGLE } from "../types"

export const darkModeHandler = () => {
    return async dispatch => {
        await dispatch({ type: DARK_MODE, payload: true })
    }
}
export const lightModeHandler = () => {
    return async dispatch => {
        await dispatch({ type: LIGHT_MODE, payload: false })
    }
}

export const toggle = state => {
    return async dispatch => {
        await dispatch({ type: TOGGLE, payload: !state })
    }
}