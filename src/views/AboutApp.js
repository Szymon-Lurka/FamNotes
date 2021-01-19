import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
margin-top:100px;
`;

const AboutApp = () => {
    return (
        <StyledWrapper>
            Informacje o aplikacji
            <Link to="/register">Zarejestruj się!</Link>
        </StyledWrapper>
    );
}

export default AboutApp;