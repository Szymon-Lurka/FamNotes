import React from 'react';
// import TaskCard from '../components/molecules/TaskCard/TaskCard';
import styled from 'styled-components';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { Redirect } from 'react-router';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const MainPage = () => {
    const local = localStorage.getItem('state');
    if (!JSON.parse(local).isLogged) {
        return <Redirect to="/login" />
    }
    const { nickName, userID, userTOKEN } = JSON.parse(localStorage.getItem('state'));

    return (
        <MainPagesTemplate>
            {local ? (
                <StyledWrapper>
                    <div>Witaj {nickName[0].toUpperCase() + nickName.substring(1)}! Co słychać?</div>
                    <div>Twoje id: {userID}</div>
                    <div>Twój token sesji: {userTOKEN}</div>
                </StyledWrapper>
            ) : null}
        </MainPagesTemplate>
    );
}

export default MainPage;