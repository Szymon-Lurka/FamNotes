import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledWrapper,
    StyledHeading,
    StyledParagraph,
    StyledButton,
} from './styles/AboutAppStyles';

const AboutApp = () => {
    return (
        <StyledWrapper>
            <StyledHeading>Informacje o aplikacji FAMNOTES</StyledHeading>
            <StyledParagraph>Aplikacja służy do dzielenia się zadaniami ze znajomymi/rodziną!</StyledParagraph>
            <StyledHeading as="h2">Co zrobić by zacząć?</StyledHeading>
            <StyledParagraph>Aby rozpocząć najpierw musisz się zarejestrować.</StyledParagraph>
            <StyledParagraph>Po zalogowaniu będziesz miał dostęp do założenia lub dołączenia do grupy.</StyledParagraph>
            <StyledParagraph>Jeśli posiadasz TAG istniejącej grupy możesz do niej dołączyć - w przeciwnym wypadku stwórz własną!</StyledParagraph>
            <StyledHeading as="h2">Gdy jesteś już członkiem grupy</StyledHeading>
            <StyledParagraph>Możesz dodawać zadania oraz je usuwać! Widzą je wszyscy członkowie Twojej grupy.</StyledParagraph>
            <StyledButton as={Link} to="/register">Wróć z powrotem!</StyledButton>
            <StyledHeading as="h2">INFORMACJE ODNOŚNIE APLIKACJI</StyledHeading>
            <StyledParagraph>Aplikacja powstała z myślą o nauce Reduxa, łączenia frontu z back-endem</StyledParagraph>
            <StyledParagraph>Nie jest ona idealna, ale dała mi sporo wiedzy i praktyki - co też było jej celem!</StyledParagraph>
            <StyledParagraph>Aplikacja aktualnie jest w wersji 1.0.0 - Można dołączyć do max. jednej grupy i nie działa w 100% poprawnie.</StyledParagraph>
        </StyledWrapper>
    );
}

export default AboutApp;
