import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const JoinRoom = () => {
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                <div>Żeby dołączyć do pokoju będziesz potrzebował dokładny TAG grupy która Cie interesuje.</div>
                <div>TAG można znaleźć w zakładce "Twoja Grupa"</div>
            </StyledWrapper>
        </MainPagesTemplate>
    );
}

export default JoinRoom;
