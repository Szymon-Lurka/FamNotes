import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';

import {
    StyledNoGroupWrapper,
    StyledParagraph,
    StyledNoGroupHeading,
    StyledButtonsWrapper,
    StyledButton
} from '../../../views/styles/MyRoomsStyles';

const HasNoGroup = () => {
    return (
        <StyledNoGroupWrapper>
            <StyledNoGroupHeading as="h2">Nie jesteś członkiem żadnej grupy!</StyledNoGroupHeading>
            <StyledParagraph>Możesz to szybko zmienić! Dołącz lub utwórz już teraz!</StyledParagraph>
            <StyledButtonsWrapper>
                <StyledButton as={Link} to="/room/join">Dołącz do grupy!</StyledButton>
                <StyledButton as={Link} to="/room/create">Załóż nową grupę!</StyledButton>
            </StyledButtonsWrapper>
        </StyledNoGroupWrapper>
    );
}

export default HasNoGroup;