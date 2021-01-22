import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
min-height: 350px;
box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
border-radius: 15px;
overflow:hidden;
display:grid;
grid-template-rows: 0.25fr 1fr;
position:relative;
animation: opacityAnim .7s linear both;
`;
export const StyledInnerWrapper = styled.div`
position:relative;
padding: 17px 30px 10px;
background-color: ${({ first, theme }) => first ? theme.colors.secondary : 'white'};
`;
export const StyledDateInfo = styled(Paragraph)`
margin: 0 0 10px;
font-weight: ${({ theme }) => theme.bold};
font-size: ${({ theme }) => theme.fontSize.xs};
color:${({ main }) => main ? "white" : "black"};
`;
export const StyledHeading = styled(Heading)`
margin:10px 0 0;
color:${({ main }) => main ? "white" : "black"};
`;
export const StyledButton = styled(Button)`
position: absolute;
bottom: 25px;
left: 40px;
background-color:${({ theme }) => theme.colors.secondary};
`;