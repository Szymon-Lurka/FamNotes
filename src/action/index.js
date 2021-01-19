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
                dispatch({ type: LOGIN_FAILURE });
            }
        });
}

export const userRegister = (login, password) => dispatch => {
    dispatch({ type: REGISTER_REQUEST });
    return axios.post('http://localhost:9000/user/register', {
        login,
        pwd: password,
    })
        .then(payload => {
            console.log(payload);
            dispatch({ type: REGISTER_SUCCESS, payload });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE });
        });
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    return axios.get('http://localhost:9000/auth/logout', {
        headers: {
            "Authorization": 'IUHN*)&AD *)g 8aD&G*&A(DGH *D&AHDA &*(HS AOUIDBAN(Y&DAG HOUIDSAH(&^DAG D(A&T^DT&DT)GSABUYHACN)&*SY(*HNXAB(&T)X^GASA^XS',
        }
    })
        .then(payload => {
            console.log(payload);
            dispatch({ type: LOGOUT_SUCCESS, payload });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGOUT_FAILURE })
        })
};