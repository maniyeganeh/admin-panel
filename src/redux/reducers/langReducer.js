import { FA_LANG, EN_LANG } from "../types"

const INITIAL_STATE = {
    lang: "en"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FA_LANG:
            return { ...state, lang: action.payload }
        case EN_LANG:
            return { ...state, lang: action.payload }
        default:
            return state
    }
}