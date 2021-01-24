import React, { useState } from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { connect } from 'react-redux';
import { exitGroup } from '../action/group-actions';
import PropTypes from 'prop-types';
import Button from '../components/atoms/Button/Button';
import {
    StyledWrapper,
    StyledHeading,
    StyledParagraph,
    StyledPanelWrapper,
    StyledPanelOptionsWrapper,
} from './styles/SettingsStyles';
import { Redirect } from 'react-router';
import store from '../store/index';

const Settings = ({ exitGroup, userGroupID, isLogged, }) => {
    const [isChanged, setIsChanged] = useState(false);
    let local = JSON.parse(localStorage.getItem('state'));
    if (!local.isLogged) {
        return <Redirect to="/login" />
    }
    let state = store.getState();
    let token = store.getState().userTOKEN;
    const handleClick = () => {
        exitGroup();
        state.groupDescription = null;
        state.groupTag = null;
        state.groupTitle = null;
        state.userGroupID = null;
        state.userTOKEN = token;
        state.isExitedFromGroup = true;
        setIsChanged(true);
    }
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                {isChanged ? <Redirect to="/" /> : null}
                <StyledHeading
                    as="h2">
                    Ustawienia konta
                    </StyledHeading>
                <StyledParagraph>
                    Jesteś zalogowany jako <span>{local.nickName[0].toUpperCase() + local.nickName.substring(1)}</span>.
                    </StyledParagraph>
                {userGroupID !== null ? (
                    <>
                        <StyledPanelWrapper>
                            <StyledPanelOptionsWrapper>
                                <StyledHeading
                                    as="h2">
                                    Opuść swoją grupę:
                                    </StyledHeading>
                                <StyledParagraph>Jeśli zechcesz wrócić - zawsze możesz do niej dołączyć z powrotem!</StyledParagraph>
                                <Button
                                    onClick={handleClick}>
                                    Opuść grupę!</Button>
                            </StyledPanelOptionsWrapper>
                        </StyledPanelWrapper>
                    </>
                ) : (
                        <>
                            <StyledHeading
                                as="h2">
                                Aktualny stan aplikacji nie przewiduje ustawień użytkownika bez grupy
                                </StyledHeading>
                        </>
                    )}
            </StyledWrapper>
        </MainPagesTemplate>
    );
}

const mapDispatchToProps = dispatch => ({
    exitGroup: () => dispatch(exitGroup())
})
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    userGroupID: state.userGroupID,
})

Settings.propTypes = {
    exitGroup: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
