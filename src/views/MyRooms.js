import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin-top:100px;
`;

const MyRooms = () => {
    const local = JSON.parse(localStorage.getItem('state'));
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                <h2>Nazwa grupy: {local.groupTitle}</h2>
                <h2>Opis grupy: {local.groupDescription}</h2>
                <h2>Tag grupy: {local.groupTag}</h2>
            </StyledWrapper>
        </MainPagesTemplate>
    );
}



export default MyRooms;
