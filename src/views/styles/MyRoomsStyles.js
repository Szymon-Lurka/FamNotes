import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
// import Paragraph from '../../components/atoms/Paragraph/Paragraph';
// STYLES FOR NOTESVIEW COMPONENT

export const StyledWrapper = styled.div`
width:80vw;
margin:0 auto;
display:grid;
grid-template-rows: 400px;
grid-template-columns: 800px;
grid-gap: 100px;
justify-content:center;
margin-top: 50px;
padding-bottom: 50px;
`
export const StyledAddButton = styled(Button)`
background-color: ${({ theme }) => theme.colors.primary};
display:flex;
justify-content:center;
align-items:center;
width: 70px;
height:70px;
padding: 20px;
border-radius: 50%;
position:fixed;
right: 50px;
bottom: 15px;
z-index:10;
`;

// STYLES FOR ADDNOTE COMPONENT

export const StyledModalWrapper = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
padding: 15px;
`;

export const StyledHeading = styled(Heading)``;
export const StyledButton = styled(Button)`
margin-top: 25px;
`;
export const StyledInput = styled(Input)`
margin-top: 25px;
width: 80%;
`;
export const StyledTextArea = styled(Input)`
margin-top: 25px;
height: 100px;
border-radius: 10px;
width: 80%;
`;

// STYLES FOR NOTESVIEWMODAL COMPONENT

export const StyledModal = styled.div`
width: 50vw;
height: 50vh;
position:fixed;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
background-color:${({ theme }) => theme.colors.secondary};
z-index: 50;
opacity: 0;
animation: ${({ isVisible }) => isVisible ? "opacityAnim .3s linear both" : null};
display: ${({ isVisible }) => isVisible ? "block" : "none"};
transition: .2s;
border-radius: 25px;
`;
export const StyledBackgroundModal = styled.div`
width: 100vw;
height: 100vh;
top:0;
left:0;
background-color: rgba(255,255,255,.8);
animation: ${({ isVisible }) => isVisible ? "opacityAnim .3s linear both" : null};
opacity: 0;
display: ${({ isVisible }) => isVisible ? "block" : "none"};
transition: .2s;
z-index:1;
position:fixed;
`;

export const StyledCloseButton = styled.img`
transform:rotate(45deg);
width: 40px;
height: 40px;
position: fixed;
right: 25px;
top: 25px;
`;
