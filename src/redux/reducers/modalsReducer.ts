import {ModalsAction, ModalsActionTypes} from "../actionCreators/modals";

const initialState = {
    isOpenRegistration:false,
    isOpenLogin:false
}


export const modalsReducer = (state=initialState,action:ModalsAction) => {
  switch (action.type) {
      case ModalsActionTypes.TOGGLE_OPENED_REGISTRATION_MODAL:{
          return {...state,isOpenRegistration: !state.isOpenRegistration}
      }
      case ModalsActionTypes.TOGGLE_OPENED_LOGIN_MODAL:{
          return {...state,isOpenLogin: !state.isOpenLogin}
      }
      case ModalsActionTypes.OPEN_LOGIN_MODAL:{
          return {...state,isOpenLogin: true,isOpenRegistration: false}
      }
      case ModalsActionTypes.OPEN_REGISTRATION_MODAL:{
          return {...state,isOpenLogin: false,isOpenRegistration: true}
      }
      default:
          return state;

  }
}

