/*
/////////////////////////////////////////////////////////////////////////////
need to refactor reducers
/////////////////////////////////////////////////////////////////////////////
*/


import {
    GETNOTES_SUCCESS,
    DELETENOTE_SUCCESS,
    ADDNOTE_SUCCESS
} from '../action/tasks-actions';

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../action/auth-actions';

import {
    CREATEGROUP_SUCCESS,
    CREATEGROUP_FAILURE,
    EXITGROUP_SUCCESS,
    JOINGROUP_SUCCESS,
    JOINGROUP_FAILURE,
} from '../action/group-actions';
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
                isCreatedGroup: null,
                isExit: false,
                isJoined: false,
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
                userID: null,
                userTOKEN: null,
                userGroupID: null,
                nickName: null,
            };
        case CREATEGROUP_FAILURE:
            return {
                ...state,
                failedMessage: action.payload.data.message,
                isCreated: false,
            }
        case CREATEGROUP_SUCCESS:
            return {
                ...state,
                userGroupID: action.payload.data.id,
                groupTitle: action.payload.data.name,
                groupDescription: action.payload.data.description,
                groupTag: action.payload.data.groupTag,
                isCreated: true,
                isExit: false,
            }
        case ADDNOTE_SUCCESS:
            return {
                ...state,
                notes: action.payload.data,
            }
        case GETNOTES_SUCCESS:
            return {
                ...state,
                notes: action.payload.data,
            }
        case EXITGROUP_SUCCESS:
            return {
                ...state,
                userGroupID: null,
                isExit: true,
                isJoined: false,
                notes: [],
            }
        case DELETENOTE_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.data.noteId.noteId),
            }
        case JOINGROUP_SUCCESS:
            return {
                ...state,
                userGroupID: action.payload.data.group.id,
                groupTitle: action.payload.data.group.name,
                groupTag: action.payload.data.group.tag,
                isJoined: action.payload.data.isSuccess,
                joinMessage: action.payload.data.message,
            }
        case JOINGROUP_FAILURE:
            return {
                ...state,
                isJoined: action.payload.data.isSuccess,
                joinMessage: action.payload.data.message,
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
            return state;
    };
};

export default appReducer;
