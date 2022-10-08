import { FA_LANG, EN_LANG } from "../types"

const INITIAL_STATE = {
    lang: JSON.parse(localStorage.getItem('lang')) || "en",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FA_LANG:
            localStorage.setItem("lang", JSON.stringify(action.payload))
            return { ...state, lang: action.payload }
        case EN_LANG:
            localStorage.setItem("lang", JSON.stringify(action.payload))

            return { ...state, lang: action.payload }
        default:
            return state
    }
}