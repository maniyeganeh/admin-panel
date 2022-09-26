import { combineReducers } from "redux"
import langReducer from "./langReducer"
import modeReducer from "./modeReducer"
import userReducer from "./userReducer"

export default combineReducers({
    mode: modeReducer,
    lang: langReducer,
    auth: userReducer
})