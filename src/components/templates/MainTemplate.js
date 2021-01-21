import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const MainTemplate = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </div>
    );
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
};

export default MainTemplate;