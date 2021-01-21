import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    StyledWrapper,
    StyledWelcomeHeading,
} from './styles/MainPageStyles';
import HasGroup from '../components/organisms/MainPageUtils/HasGroup';
import HasNoGroup from '../components/organisms/MainPageUtils/HasNoGroup';

const MainPage = ({ isLogged }) => {
    const local = JSON.parse(localStorage.getItem('state'));
    const isGroup = local.userGroupID;
    if (local.isCreatedGroup) {
        return <Redirect to="/room/create" />
    };
    const { nickName } = JSON.parse(localStorage.getItem('state'));

    return (
        <MainPagesTemplate>
            {local.isLogged ? (
                <StyledWrapper>
                    <StyledWelcomeHeading>Witaj <span>{nickName[0].toUpperCase() + nickName.substring(1)}</span>! Co słychać?</StyledWelcomeHeading>
                    {isGroup !== null ? (
                        <HasGroup />
                    ) : (
                            <HasNoGroup />
                        )}
                </StyledWrapper>
            ) : null}
        </MainPagesTemplate>
    );
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged
});

MainPage.propTypes = {
    isLogged: PropTypes.bool,
};


export default connect(mapStateToProps)(MainPage);