import { AUTH, DONE, PENDING, LOG_OUT, SINGLE_USER } from "../types"

const INITIAL_STATE = {
    authData: null || JSON.parse(localStorage.getItem('profile')),
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PENDING:
            return { ...state, isLoading: true }
        case DONE:
            return { ...state, isLoading: false }
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        case SINGLE_USER:
            return { ...state, authData: action?.data }
        case LOG_OUT:
            localStorage.removeItem("profile")
            return { ...state, authData: null, isLoading: false }
        default:
            return state

    }

}
