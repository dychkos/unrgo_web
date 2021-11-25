import {combineReducers} from "redux";
import {modalsReducer} from "./modalsReducer";


export type RootState = {
    modalsReducer: {
        isOpenRegistration: boolean,
        isOpenLogin:boolean
    }
}

const rootReducer = combineReducers({
    modalsReducer
});


export default rootReducer;