import React from 'react';
import Navigation from '../molecules/Navigation/Navigation';
import PropTypes from 'prop-types';

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

export default MainPagesTemplate;