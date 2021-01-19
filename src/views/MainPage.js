import React from 'react';
// import TaskCard from '../components/molecules/TaskCard/TaskCard';
import styled from 'styled-components';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const MainPage = ({ isLogged, nickName }) => {
    if (!isLogged) {
        return <Redirect to="/login" />
    }
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                <div>Witaj {nickName[0].toUpperCase() + nickName.substring(1)}! Co słychać?</div>
            </StyledWrapper>
        </MainPagesTemplate>
    );
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    nickName: state.nickName,
});

MainPage.propTypes = {
    isLogged: PropTypes.bool,
    nickName: PropTypes.string,
};
MainPage.defaultProps = {
    isLogged: false,
    nickName: '',
}

export default connect(mapStateToProps)(MainPage);