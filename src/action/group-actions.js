import axios from 'axios';

export const CREATEGROUP_REQUEST = "CREATEGROUP_REQUEST";
export const CREATEGROUP_SUCCESS = "CREATEGROUP_SUCCESS";
export const CREATEGROUP_FAILURE = "CREATEGROUP_FAILURE";
export const EXITGROUP_REQUEST = 'EXITGROUP_REQUEST';
export const EXITGROUP_SUCCESS = 'EXITGROUP_SUCCESS';
export const EXITGROUP_FAILURE = 'EXITGROUP_FAILURE';
export const JOINGROUP_REQUEST = 'JOINGROUP_REQUEST';
export const JOINGROUP_SUCCESS = 'JOINGROUP_SUCCESS';
export const JOINGROUP_FAILURE = 'JOINGROUP_FAILURE';

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