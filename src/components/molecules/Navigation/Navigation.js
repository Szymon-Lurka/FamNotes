import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import addIcon from '../../../assets/svg/add.svg';
import joinIcon from '../../../assets/svg/arrow-join.svg';
import settingsIcon from '../../../assets/svg/gear.svg';
import logoutIcon from '../../../assets/svg/logout.svg';
import myIcon from '../../../assets/svg/my-space-logo.svg';
import { connect } from 'react-redux';
import { logout } from '../../../action';

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
@media(max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
}
@media(max-width: 600px) {
    width: 100%;
    margin-left: -20px;
}
`;
const StyledLi = styled.li`
list-style:none;
`;
const StyledLink = styled(NavLink)`
color:black;
text-decoration:none;
transition:.3s;
display:flex;
position:relative;
& .hint {
    position:absolute;
    bottom: -50px;
    left: -100%;
    padding: 10px;
    text-align:center;
    width: 200px;
    background-color: rgba(30,30,30,.5);
    color:white;
    border-radius:20px;
    visibility:hidden;
    opacity: 0;
}
&:hover {
color:white;
}
&:hover .hint {
    visibility:visible;
    opacity: 1;
    transition: .6s;
}
&.active img {
    background-color:white !important;
}
`;
const StyledIcon = styled.img`
width:35px;
align-self:center;
justify-self:center;
box-sizing:content-box;
padding:10px;
border-radius: 10px;
@media(max-width: 600px) {
    width: 30px;
}
`;
const Navigation = ({ logout }) => {
    const handleLogout = () => {
        console.log(logout);
        logout();
    }
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink
                        exact to="/room/create"
                        activeClassName="active">
                        <div className="hint">
                            Stwórz nowy pokój
                            </div>
                        <StyledIcon
                            src={addIcon}
                            alt="add room icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink exact to="/room/join">
                        <div className="hint">
                            Dołącz do pokoju
                            </div>
                        <StyledIcon
                            src={joinIcon}
                            alt="join room icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink exact to="/room">
                        <div className="hint">
                            Twoje pokoje
                            </div>
                        <StyledIcon
                            src={myIcon}
                            alt="my rooms icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink exact to="/account">
                        <div className="hint">
                            Ustawienia
                            </div>
                        <StyledIcon
                            src={settingsIcon}
                            alt="settings icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/login" onClick={handleLogout}>
                        <div className="hint">
                            Wyloguj się
                            </div>
                        <StyledIcon
                            src={logoutIcon}
                            alt="logout icon" />
                    </StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Navigation);