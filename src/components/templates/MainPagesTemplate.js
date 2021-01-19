import React from 'react';
import Navigation from '../molecules/Navigation/Navigation';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const MainPagesTemplate = ({ children }) => {
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