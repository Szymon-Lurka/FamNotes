/* eslint-disable default-case */


import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from '../action/index';

const initialState = {
    // isLogged: false,
    // nickName: 'xd',
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                nickName: JSON.parse(action.payload.config.data).login,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogged: false,
            }
        case LOGOUT_SUCCESS:
            return {
                isLogged: false,
            }
        case REGISTER_FAILURE:
            return {
                isLogged: false,
                isRegisterSuccess: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLogged: false,
                isRegisterSuccess: true,
            }
        default:
            return {
                ...state,
                isLogged: false,
                nickName: null,
                isRegisterSuccess: null,
            }
    }
}
export default appReducer;