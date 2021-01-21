import { CREATEGROUP_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from '../action/index';

const initialState = {};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                userID: action.payload.data.userData.userID,
                userTOKEN: action.payload.data.userData.userToken,
                userGroupID: action.payload.data.userData.userGroupID,
                nickName: JSON.parse(action.payload.config.data).login,
                groupTitle: action.payload.data.userData.groupTitle,
                groupDescription: action.payload.data.userData.groupDescription,
                groupTag: action.payload.data.userData.groupTag,
                loginFailedMessage: null,
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
                ...state,
                isLogged: false,
                userID: null,
                userTOKEN: null,
                userGroupID: null,
                nickName: null,
            };
        case CREATEGROUP_SUCCESS:
            return {
                ...state,
                isLogged: true,
                nickName: action.payload.data.login,
                userGroupID: action.payload.data.id,
                userID: state.userID,
                userTOKEN: state.userToken,
                groupTitle: action.payload.data.name,
                groupDescription: action.payload.data.description,
                groupTag: action.payload.data.groupTag,
                isCreatedGroup: action.payload.data.isSuccess,
            }
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
                userTOKEN: null,
                userGroupID: null,
                groupTitle: '',
                groupDescription: '',
                nickName: null,
                isRegisterSuccess: null,
                invalidLoginData: false,
                registerMessage: '',
                isCreatedGroup: false,
                groupTag: '',
            };
    };
};

export default appReducer;
