import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledHeading = styled(Heading)`
@media(max-width:500px) {
    width: 80%;
    text-align:center;
}
`;
const StyledParagraph = styled(Paragraph)`
@media(max-width:500px) {
    width: 80%;
    text-align:center;
}`;
const StyledButton = styled(Button)`
display:flex;
align-items:center;
justify-content:center;
color:black;
text-decoration:none;
`;
const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:60vh;
width:100vw;
`;
const StyledButtonsWrapper = styled.div`
display:flex;
width: 36%;
justify-content: space-between;
@media(max-width:1170px) {
    width:50%;
}
@media(max-width:905px) {
    width: 70%;
}
@media(max-width:650px) {
    flex-direction: column;
    align-items:center;
    height: 150px;
}
`;

const HasNoGroup = () => {
    return (
        <StyledWrapper>
            <StyledHeading as="h2">Nie jesteś członkiem żadnej grupy!</StyledHeading>
            <StyledParagraph>Możesz to szybko zmienić! Dołącz lub utwórz już teraz!</StyledParagraph>
            <StyledButtonsWrapper>
                <StyledButton as={Link} to="/room/join">Dołącz do grupy!</StyledButton>
                <StyledButton as={Link} to="/room/create">Załóż nową grupę!</StyledButton>
            </StyledButtonsWrapper>
        </StyledWrapper>
    );
}

export default HasNoGroup;