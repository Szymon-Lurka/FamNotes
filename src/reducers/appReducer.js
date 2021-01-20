import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from '../action/index';

const initialState = {};

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
                invalidLoginData: true,
                loginFailedMessage: action.payload.data.error,
            };
        case LOGOUT_SUCCESS:
            return {
                isLogged: false,
            };
        case REGISTER_FAILURE:
            return {
                isLogged: false,
                isRegisterSuccess: false,
                registerMessage: action.payload.data,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLogged: false,
                isRegisterSuccess: true,
                registerMessage: 'Pomyślnie zarejestrowano!',
            };
        default:
            return {
                ...state,
                isLogged: false,
                nickName: null,
                isRegisterSuccess: null,
                invalidLoginData: false,
                registerMessage: '',
            };
    };
};

export default appReducer;
