import toast from "react-hot-toast"
import { FA_LANG, EN_LANG } from "../types"

export const faLangHandler = () => {
    return async dispatch => {
        await dispatch({ type: FA_LANG, payload: "fa" })
        toast.success("زبان به فارسی تغییر پیدا کرد")
    }
}
export const enLangHandler = () => {
    return async dispatch => {
        await dispatch({ type: EN_LANG, payload: "en" })
        toast.success("You Choose English For Language")
    }
}