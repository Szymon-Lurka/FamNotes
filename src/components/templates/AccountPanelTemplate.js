import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Formik,
} from 'formik';
import { connect } from 'react-redux';
import { authenticate, userRegister } from '../../action/index';


const AccountPanelTemplate = ({ register, authenticate, userRegister, isLogged, children, state }) => {
    const local = JSON.parse(localStorage.getItem('state'))
    if (local) {
        if (local.isLogged && !local.isExit) {
            return <Redirect to="/" />
        }
    }
    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={({ login, password }) => {
                if (register) {
                    userRegister(login, password);
                } else {
                    authenticate(login, password);
                }
            }}
        >
            {children}
        </Formik>
    );
}

AccountPanelTemplate.propTypes = {
    register: PropTypes.bool,
    authenticate: PropTypes.func,
    isLogged: PropTypes.bool,
    children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    state,
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
    userRegister: (username, password) => dispatch(userRegister(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPanelTemplate);
