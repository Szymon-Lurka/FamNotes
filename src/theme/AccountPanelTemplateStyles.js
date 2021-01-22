import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import backgroundImg from '../assets/img/background.png';


export const StyledLabel = styled.label`
color: red;
text-align:center;
width: 100%;
 `;
export const StyledWarningInput = styled(Input)`
background-color: #A1030399;
margin: 0 auto;
 `;
export const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url(${backgroundImg});
 `;
export const StyledForm = styled.div`
width: 30%;
height: 40%;
border-radius: 25px;
background-color: white;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
grid-gap:25px;
@media(max-width:1065px) {
    width: 50%;
}
@media(max-width:640px) {
    width:80%;
    height:50%;
}
@media(max-width: 380px) {
    height:60%;
}
 `;
export const StyledSmallButton = styled(Button)`
background:none;
width: 50%;
text-decoration: underline;
display: block;
color: black;
text-align:center;
opacity: ${({ isVisible }) => isVisible ? "0" : "1"};
@media(max-width:1572px) {
    width: 60%;
}
@media(max-width:1310px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
}
 `;
export const StyledHeadingInfo = styled(Heading)`
text-align:center;
`;
export const StyledRegisterSuccessButton = styled(Button)`
display:flex;
justify-content:center;
align-items:center;
color:black;
text-decoration:none;
`;
export const StyledInfoLink = styled(Heading)`
color: black;
margin-top: 25px;
text-decoration:none;
cursor:pointer;
@media(max-width: 470px) {
    font-size: ${({ theme }) => theme.fontSize.s};
}
& span {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 8px;
    border-radius: 35px;
    transition:.3s;
    &:hover {
        background-color: black;
        color:white;
    }
}
 `;
export const StyledHeading = styled(Heading)`
@media(max-width:947px) {
    width: 60%;
    text-align:center;
}
@media(max-width:724px) {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.s};
}
`;