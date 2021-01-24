import axios from 'axios';

export const GETNOTES_REQUEST = 'GETNOTES_REQUEST';
export const GETNOTES_SUCCESS = 'GETNOTES_SUCCESS';
export const GETNOTES_FAILURE = 'GETNOTES_FAILURE';
export const DELETENOTE_REQUEST = 'DELETENOTE_REQUEST';
export const DELETENOTE_SUCCESS = 'DELETENOTE_SUCCESS';
export const ADDNOTE_REQUEST = 'ADDNOTE_REQUEST';
export const ADDNOTE_SUCCESS = 'ADDNOTE_SUCCESS';
export const ADDNOTE_FAILURE = 'ADDNOTE_FAILURE';


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