import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import { Form } from 'formik';

// FOR NO GROUP COMPONENT STYLES

export const StyledHeading = styled(Heading)`
text-align:center;
color: ${({ theme }) => theme.colors.secondary};
`;
export const StyledParagraph = styled(Paragraph)`
text-align:center;
`;
export const StyledNoGroupWrapper = styled.div`
transform:translateX(-100%);
height: 100vh;
display:flex;
flex-direction:column;
justify-content:center;
margin-top: -100px;
align-items:center;
animation: fromLeftToRight .5s ease-in both;
`;
export const StyledForm = styled(Form)`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
margin-top: 25px;
height: ${({ anim }) => anim ? "250px" : "150px"};
transition: .3s;
`;

export const WarningInput = styled(Input)`
background-color: ${({ theme }) => theme.colors.warning};
margin: 0 auto;
`;
export const WarningLabel = styled.label`
color: red;
text-align:center;
display:block;
width:100%;
margin: 40px auto 62px;
`;


// FOR JOINED GROUP COMPONENT STYLES


export const StyledJoinedWrapper = styled.div`
width: 100vw;
height: 89.3vh;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
transform:translateX(-100%);
animation: fromLeftToRight .4s linear both;
`;
export const StyledJoinedHeading = styled(Heading)`

`;
export const StyledJoinedParagraph = styled(Paragraph)`
animation: opacityAnim 1s .6s linear both;
`;
export const StyledJoinedButton = styled(Button)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
color:black;
animation: opacityAnim 1s 1s linear both;
`;


// FOR ALREADY HAS A GROUP COMPONENT STYLES

export const StyledHasGroupWrapper = styled.div`
width: 100vw;
height: 90vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const StyledHasGroupHeading = styled(Heading)`
animation: opacityAnim .4s linear both;
`;
export const StyledHasGroupParagraph = styled(Paragraph)`
animation: opacityAnim .4s .4s linear both;

`;
export const StyledHasGroupButtonsWrapper = styled.div`
display:flex;
width: 30%;
margin-top: 30px;
align-items:center;
justify-content:space-around;
animation: opacityAnim .4s .8s linear both;

`;
export const StyledHasGroupButton = styled(Button)`
display:flex;
justify-content:center;
align-items:center;
color:black;
text-decoration:none;
`;