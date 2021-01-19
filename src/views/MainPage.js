import React from 'react';
import TaskCard from '../components/molecules/TaskCard/TaskCard';
import styled from 'styled-components';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const MainPage = () => {
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                <div>No elo</div>
            </StyledWrapper>
        </MainPagesTemplate>
    );
}

export default MainPage;