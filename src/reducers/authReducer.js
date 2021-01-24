/*
/////////////////////////////////////////////////////////////////////////////
need to refactor reducers
/////////////////////////////////////////////////////////////////////////////
*/


// import {
//     GETNOTES_SUCCESS,
//     DELETENOTE_SUCCESS,
//     ADDNOTE_SUCCESS
// } from '../action/tasks-actions';

// const authReducer = (state = {}, action) => {
//     switch (action.type) {
//         case ADDNOTE_SUCCESS:
//             return {
//                 ...state,
//                 notes: action.payload.data,
//             }
//         case GETNOTES_SUCCESS:
//             return {
//                 ...state,
//                 notes: action.payload.data,
//             }
//         case DELETENOTE_SUCCESS:
//             return {
//                 ...state,
//                 notes: state.notes.filter(note => note.id !== action.payload.data.noteId.noteId),
//             }
//         default:
//             return state;
//     }
// };

// export default authReducer;