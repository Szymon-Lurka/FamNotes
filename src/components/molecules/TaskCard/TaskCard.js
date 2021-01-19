import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
min-height: 350px;
box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
border-radius: 15px;
overflow:hidden;
display:grid;
grid-template-rows: 0.25fr 1fr;
`;
const StyledInnerWrapper = styled.div`
position:relative;
padding: 17px 30px 10px;
background-color: royalblue;
`;
const StyledDateInfo = styled(Paragraph)`
margin: 0 0 10px;
font-weight: ${({ theme }) => theme.bold};
font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyledHeading = styled(Heading)`
margin:10px 0 0;
`;
const TaskCard = () => {
    return (
        <StyledWrapper>
            <StyledInnerWrapper>
                <StyledHeading as="h2">Tytuł</StyledHeading>
                <StyledDateInfo>2 godziny temu</StyledDateInfo>
            </StyledInnerWrapper>
            <StyledInnerWrapper>
                <Paragraph>Treść zadania</Paragraph>
                <Button>Opcje</Button>
            </StyledInnerWrapper>
        </StyledWrapper>
    );
}

export default TaskCard;