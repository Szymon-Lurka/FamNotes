import React from 'react';
import Navigation from '../molecules/Navigation/Navigation';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const MainPagesTemplate = ({ children }) => {
    const local = JSON.parse(localStorage.getItem('state'))
    if (!local.isLogged) {
        return <Redirect to="/login" />
    }
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

MainPagesTemplate.propTypes = {
    children: PropTypes.element,
};

export default MainPagesTemplate;