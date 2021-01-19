import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Input from '../atoms/Input/Input';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Button from '../atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import backgroundImg from '../../assets/img/background.png';

const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url(${backgroundImg});
`;
const StyledForm = styled.div`
width: 30%;
height: 40%;
border-radius: 25px;
background-color: white;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
grid-gap:25px;
`;
const StyledSmallButton = styled(Button)`
background:none;
width: 50%;
text-decoration: underline;
display: block;
color: black;
text-align:center;
`;
const StyledInfoLink = styled(Heading)`
color: black;
margin-top: 25px;
text-decoration:none;
cursor:pointer;
& span {
    background-color:#FAB800;
    padding: 8px;
    border-radius: 35px;
    transition:.3s;
    &:hover {
        background-color: black;
        color:white;
    }
}
`;
const AccountPanelTemplate = ({ register }) => {
    const [isLogged, setIsLogged] = useState(false);
    if (isLogged) {
        return <Redirect to='/' />
    }
    const handleClick = () => {
        setIsLogged(true);
    }
    return (
        <StyledWrapper>
            <Heading as="h2">FAMNOTES</Heading>
            <Heading>Twoja nowa ulubiona aplikacja do zarządzania obowiązkami w domu!</Heading>
            <StyledForm>
                <Heading as="h2">{register ? "Zarejestruj się!" : "Zaloguj się!"}</Heading>
                <Input
                    placeholder="LOGIN"
                    type="text"
                    name="username"
                />
                <Input
                    placeholder="HASŁO"
                    type="passowrd"
                    name="password"
                />
                <Button onClick={handleClick}>{register ? "Zarejestruj się!" : "Zaloguj się!"}</Button>
                <StyledSmallButton secondary as={Link} to={register ? "/login" : "/register"}>{register ? "Chcę się zalogować!" : "Chcę się zarejestrować!"}</StyledSmallButton>
            </StyledForm>
            <StyledInfoLink as={Link} to="/info">Dowiedz się więcej o <span>FAMNOTES</span></StyledInfoLink>
        </StyledWrapper>
    );
}
export default AccountPanelTemplate;