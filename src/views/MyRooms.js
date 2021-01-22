import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin-top:100px;
transform:translateY(-100%);
position:absolute;
opacity: 1;
animation: fromUpToDown 0.35s ease-in-out both;
`;
const StyledBackground = styled.div`
width:100vw;
height:89.3%;
background-color: ${({ theme }) => theme.colors.secondary};
z-index:1;

`;

const MyRooms = () => {
    const local = JSON.parse(localStorage.getItem('state'));
    return (
        <MainPagesTemplate>
            <StyledBackground />
            <StyledWrapper>
                <h2>Nazwa grupy: {local.groupTitle}</h2>
                <h2>Opis grupy: {local.groupDescription}</h2>
                <h2>Tag grupy: {local.groupTag}</h2>
            </StyledWrapper>
        </MainPagesTemplate>
    );
}



export default MyRooms;
