import styled, { css } from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
margin-top: 120px;
@media(max-width:750px) {
    padding-bottom: 25px;
}
`;
export const StyledMainHeading = styled(Heading)`
text-align:center;
justify-self:flex-start;
margin-top: 0;
color: ${({ main, theme }) => main ? theme.colors.primary : "black"};
animation: opacityAnim 1s linear both;
@media(max-width:750px) {
    font-size:${({ theme }) => theme.fontSize.m};
    width: 80%;
    margin: 0 auto 15px;
}
${({ second }) => second && css`
animation: opacityAnim 1s 4s linear both;
`}
${({ third }) => third && css`
animation: opacityAnim 1s 8s linear both;
`}
& span {
    color:${({ theme }) => theme.colors.primary};
}
`;


export const StyledParagraph = styled(Paragraph)`
text-align:center;
animation: opacityAnim 1s linear both;
${({ second }) => second && css`
animation: opacityAnim 1s 4s linear both;
`}
${({ third }) => third && css`
animation: opacityAnim 1s 8s linear both;
`}
@media(max-width:750px) {
    width: 80%;
    margin: 0 auto;
}
`;


export const StyledInput = styled(Input)`
margin: 40px auto 62px;
width: 400px;
animation:${({ anim }) => anim ? "opacityAnim 1s linear both" : null};
@media(max-width:750px) {
    width:300px;
}
${({ third }) => third && css`
animation: opacityAnim 1s 8s linear both;
`}
`;


export const StyledTextArea = styled(Input)`
height: 100px;
margin: 40px auto 62px;
border-radius: 13px;
width: 400px;
resize:none;
animation: ${({ anim }) => !anim ? "opacityAnim 1s 4s linear both" : null};
@media(max-width:750px) {
    width:300px;
}
`;


export const StyledButton = styled(Button)`
margin: 0 auto;
animation: opacityAnim 1s 10s linear both;
`;


export const StyledGroupWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;
export const StyledGroupButton = styled(Button)`
display:flex;
justify-content:center;
align-items:center;
width:300px;
color: black;
text-decoration:none;
margin: 40px auto;
animation: opacityAnim 1s 2s linear both;
`;

export const WarningLabel = styled.label`
color: red;
text-align:center;
display:block;
width:100%;
margin: 40px auto 62px;
`;
export const WarningInput = styled(Input)`
background-color: ${({ theme }) => theme.colors.warning};
margin: 0 auto;
@media(max-width:750px) {
    width:300px;
}
`;
export const WarningTextArea = styled(Input)`
background-color: ${({ theme }) => theme.colors.warning};
height: 100px;
margin: 40px auto 62px;
border-radius: 13px;
width: 400px;
resize:none;
@media(max-width:750px) {
    width:300px;
}
`;