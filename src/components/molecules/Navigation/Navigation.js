import React from 'react';
import addIcon from '../../../assets/svg/add.svg';
import joinIcon from '../../../assets/svg/arrow-join.svg';
import settingsIcon from '../../../assets/svg/gear.svg';
import myIcon from '../../../assets/svg/my-space-logo.svg';
import logoutIcon from '../../../assets/svg/logout.svg';
import { connect } from 'react-redux';
import { logout } from '../../../action';
import PropTypes from 'prop-types';
import {
    StyledNav,
    StyledUl,
    StyledLi,
    StyledLink,
    StyledIcon,
} from './NavigationStyles'
import { Redirect } from 'react-router';
const Navigation = ({ logout }) => {
    const handleLogoutClick = () => {
        logout()
        return <Redirect to="/login" />
    }
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink
                        exact to="/room/create"
                        activeClassName="active">
                        <div className="hint">
                            Stwórz nową grupę
                            </div>
                        <StyledIcon
                            src={addIcon}
                            alt="add room icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink exact to="/room/join">
                        <div className="hint">
                            Dołącz do grupy
                            </div>
                        <StyledIcon
                            src={joinIcon}
                            alt="join room icon" />
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink exact to="/room">
                        <div className="hint">
                            Twoja grupa
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
                    <StyledLink to="/login" onClick={handleLogoutClick}>
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

Navigation.propTypes = {
    logout: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Navigation);
