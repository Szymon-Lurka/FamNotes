import axios from 'axios';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const CREATEGROUP_REQUEST = "CREATEGROUP_REQUEST";
export const CREATEGROUP_SUCCESS = "CREATEGROUP_SUCCESS";
export const CREATEGROUP_FAILURE = "CREATEGROUP_FAILURE";
export const EXITGROUP_REQUEST = 'EXITGROUP_REQUEST';
export const EXITGROUP_SUCCESS = 'EXITGROUP_SUCCESS';
export const EXITGROUP_FAILURE = 'EXITGROUP_FAILURE';
export const JOINGROUP_REQUEST = 'JOINGROUP_REQUEST';
export const JOINGROUP_SUCCESS = 'JOINGROUP_SUCCESS';
export const JOINGROUP_FAILURE = 'JOINGROUP_FAILURE';
export const GETNOTES_REQUEST = 'GETNOTES_REQUEST';
export const GETNOTES_SUCCESS = 'GETNOTES_SUCCESS';
export const GETNOTES_FAILURE = 'GETNOTES_FAILURE';
export const DELETENOTE_REQUEST = 'DELETENOTE_REQUEST';
export const DELETENOTE_SUCCESS = 'DELETENOTE_SUCCESS';
export const ADDNOTE_REQUEST = 'ADDNOTE_REQUEST';
export const ADDNOTE_SUCCESS = 'ADDNOTE_SUCCESS';
export const ADDNOTE_FAILURE = 'ADDNOTE_FAILURE';


export const authenticate = (login, password) => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post('http://localhost:9000/auth/login', {
        login,
        pwd: password,
    })
        .then(payload => {
            if (payload.data.ok) {
                dispatch({ type: LOGIN_SUCCESS, payload });
            }
            else {
                dispatch({ type: LOGIN_FAILURE, payload });
            }
        });
};

export const userRegister = (login, password) => dispatch => {
    dispatch({ type: REGISTER_REQUEST });
    return axios.post('http://localhost:9000/user/register', {
        login,
        pwd: password,
    })
        .then(payload => {
            if (typeof payload.data === 'string') {
                dispatch({ type: REGISTER_FAILURE, payload });
            } else {
                dispatch({ type: REGISTER_SUCCESS, payload });
            }
        })
        .catch(err => {
            console.log(err);
        });
}


export const logout = () => (dispatch, getState) => {
    dispatch({ type: LOGOUT_REQUEST });
    return axios.post('http://localhost:9000/auth/logout', {
        id: getState().userID,
    })
        .then(payload => {
            dispatch({ type: LOGOUT_SUCCESS, payload });
        })
        .catch(err => {
            dispatch({ type: LOGOUT_FAILURE })
        })
};

export const createGroup = (name, description, tag) => (dispatch, getState) => {
    dispatch({ type: CREATEGROUP_REQUEST });
    return axios.post('http://localhost:9000/group/create', {
        name,
        description,
        groupTag: tag,
        userID: getState().userID,
    })
        .then(payload => {
            if (payload.data.isSuccess) {
                dispatch({ type: CREATEGROUP_SUCCESS, payload });
            } else {
                dispatch({ type: CREATEGROUP_FAILURE, payload });
            }
        });
};

export const exitGroup = () => (dispatch, getState) => {
    dispatch({ type: EXITGROUP_REQUEST });
    return axios.post('http://localhost:9000/group/exit', {
        userID: getState().userID,
    })
        .then(payload => {
            dispatch({ type: EXITGROUP_SUCCESS, payload });
        })
        .catch(err => {
            dispatch({ type: EXITGROUP_FAILURE });
        });
};

export const joinGroup = (tag) => (dispatch, getState) => {
    dispatch({ type: JOINGROUP_REQUEST });
    return axios.post('http://localhost:9000/group/join', {
        userID: getState().userID,
        groupTag: tag,
    })
        .then(payload => {
            if (payload.data.isSuccess) {
                dispatch({ type: JOINGROUP_SUCCESS, payload })
            } else {
                dispatch({ type: JOINGROUP_FAILURE, payload });
            }
        })
}

export const getNotes = () => (dispatch, getState) => {
    dispatch({ type: GETNOTES_REQUEST });
    return axios.post('http://localhost:9000/note/get', {
        groupId: getState().userGroupID,
    })
        .then(payload => {
            dispatch({ type: GETNOTES_SUCCESS, payload });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GETNOTES_FAILURE });
        })
}

export const deleteNote = noteId => (dispatch) => {
    dispatch({ type: DELETENOTE_REQUEST });
    return axios.delete('http://localhost:9000/note/delete', {
        data: {
            noteId,
        },
    })
        .then(payload => {
            dispatch({ type: DELETENOTE_SUCCESS, payload });
        })
}

export const addNote = (title, content) => (dispatch, getState) => {
    dispatch({ type: ADDNOTE_REQUEST });
    return axios.post('http://localhost:9000/note/add', {
        title: title,
        content: content,
        author: getState().nickName,
        groupId: getState().userGroupID,
    })
        .then(payload => {
            console.log(payload.data);
            dispatch({ type: ADDNOTE_SUCCESS, payload })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADDNOTE_FAILURE })
        })
}