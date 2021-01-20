import React from 'react';
import Navigation from '../molecules/Navigation/Navigation';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const MainPagesTemplate = ({ children }) => {
    const local = localStorage.getItem('state');
    if (!JSON.parse(local).isLogged) {
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
    children: PropTypes.element.isRequired,
};

// const mapStateToProps = () => { }

export default MainPagesTemplate;