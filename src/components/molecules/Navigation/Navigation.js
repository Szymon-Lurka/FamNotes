import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
width: 100vw;
height: 100px;
position:fixed;
top: 0;
left:0;
right: 0;
display:flex;
justify-content:center;
align-items:center;
background-color:orange;
`;
const StyledUl = styled.ul`
width: 40%;
display:flex;
justify-content:space-between;
align-items:center;
`;
const StyledLi = styled.li`
list-style:none;
`;
const StyledLink = styled(NavLink)`
color:black;
text-decoration:none;
transition:.3s;
&:hover {
color:white;
}
&.active {
    color:white !important;
}
`;
const Navigation = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink exact to="/room/create" activeClassName="active">Stwórz nowy pokój</StyledLink></StyledLi>
                <StyledLi><StyledLink exact to="/room/join">Dołącz do pokoju</StyledLink></StyledLi>
                <StyledLi><StyledLink exact to="/room">Moje pokoje</StyledLink></StyledLi>
                <StyledLi><StyledLink exact to="/account">Ustawienia</StyledLink></StyledLi>
                <StyledLi><StyledLink exact to="/login">Wyloguj się</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

export default Navigation;