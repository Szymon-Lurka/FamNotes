import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

export const StyledWrapper = styled.div`
margin-top: 100px;
`;

export const StyledWelcomeHeading = styled(Heading)`
text-align:center;
animation: mainAnim 1s 1s linear both;
margin-top: 150px;
& span {
    color:orange;
}
`;

export const StyledNoGroupWrapper = styled.div`
width: 80vw;
margin: 0 auto;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
margin-top: 100px;
animation: mainAnim 1s 1.5s linear both;
@media(max-width: 660px) {
    margin-top: 50px;
}
@media(max-width: 360px) {
    margin-top: 0;
}
`;
export const StyledNoGroupHeading = styled(Heading)`
font-size: 4rem;
display:flex;
flex-direction: column;
text-align:center;
@media(max-width: 660px) {
    font-size:3rem;
}
& span {
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 15px;
    color:orange;
}
`;
export const StyledNoGroupParagraph = styled(Paragraph)`
font-size: 2.2rem;
`;
export const StyledNoGroupButtonsWrapper = styled.div`
display: flex;
width: 35vw;
justify-content:space-between;
@media(max-width:1274px) {
    width: 50vw;
}
@media(max-width:906px) {
    width: 70vw;
}
@media(max-width: 660px) {
    flex-direction:column;
    align-items:center;
    height: 14vh;
}
`;

export const StyledNoGroupButton = styled(Button)`
display:flex;
align-items:center;
justify-content:center;
color:black;
text-decoration:none;
background-color: ${({ info }) => info ? "black" : "#FBC14D"};
color: ${({ info }) => info ? "white" : "black"};
width: ${({ info }) => info ? "200px" : '220px'};
font-size: 1.5rem;
@media(max-height: 720px) {
    display:${({ info }) => info ? 'flex' : 'none'};
}
`;

export const StyledNoGroupInfoWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
position:absolute;
bottom: 25px;
@media(max-width: 600px) {
    width: 70vw;
}
`;
export const StyledNoGroupInfoHeading = styled(Heading)`
border-bottom: 5px solid orange;
margin-top: 200px;
font-size: 2.6rem;
@media(max-width: 600px) {
    font-size: 2rem;
    text-align:center;
}
`;

export const StyledHeading = styled(Heading)`
text-align:center;
animation: mainAnim 1s 2s linear both;
`;
export const StyledParagraph = styled(Paragraph)`
text-align:center;
animation: mainAnim 1s 2s linear both;
`;
export const StyledButton = styled(Button)`
display:flex;
justify-content:center;
align-items:center;
width: 300px;
color:black;
text-decoration:none;
margin: 0 auto;
animation: mainAnim 1s 2s linear both;
`;