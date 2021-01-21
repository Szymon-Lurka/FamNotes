import React from 'react';
import styled from 'styled-components';
import Heading from '../../../atoms/Heading/Heading';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import Button from '../../../atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
display:flex;
width: 100vw;
height:100vh;
max-height: 100vh;
overflow:hidden;
justify-content:center;
align-items:center;
position:relative;
`;
const StyledBackground = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color:#DDDFFF;
transform:scale(1);
animation: groupCreatedAnim .3s linear both;
`;
const StyledHeadingsWrapper = styled.div`
width: 50vw;
height: 50vh;
background-color:${({ theme }) => theme.colors.secondary};
position:absolute;
top:50%;
left:50%;
border-radius: 25px;
transform:translate(-50%, -50%);
animation: groupCreatedInfoAnim 1s .6s linear both;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
padding-top: 100px;
@media(max-width:845px) {
    width: 70vw;
}
@media(max-width:500px) {
    width: 80vw;
    height: 65vh;
}
`;
const StyledHeading = styled(Heading)`
color:white;
animation: groupCreatedInfoAnim 1s .9s linear both;
text-align:center;
@media(max-width: 1100px) {
    width:80%;
}
`;
const StyledParagraph = styled(Paragraph)`
animation: groupCreatedInfoAnim 1s 1.4s linear both;
color:white;
text-align:center;
@media(max-width:1475px) {
    width: 80%;
}
`;
const StyledButton = styled(Button)`
width:270px;
background-color:white;
color:black;
display: flex;
justify-content:center;
align-items:center;
text-decoration:none;
animation: groupCreatedInfoAnim 1s 1.8s linear both;
`;
const GroupCreated = () => {
    return (
        <StyledWrapper>
            <StyledBackground />
            <StyledHeadingsWrapper>
                <StyledHeading as="h2">Super! Właśnie założyłeś grupę!</StyledHeading>
                <StyledParagraph>Możesz teraz podzielić się TAG'iem grupy ze znajomymi i razem dodawać nowe zadania!</StyledParagraph>
                <StyledButton as={Link} to="/room">Przejdź do swojej grupy!</StyledButton>
            </StyledHeadingsWrapper>
        </StyledWrapper>
    );
}

export default GroupCreated;