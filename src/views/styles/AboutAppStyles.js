import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

export const StyledWrapper = styled.div`
margin-top:100px;
display:flex;
flex-direction:column;
align-items:center;
`;
export const StyledButton = styled(Button)`
display:flex;
align-items:center;
justify-content:center;
color:black;
text-decoration:none;
`;
export const StyledHeading = styled(Heading)`
@media(max-width:1030px) {
    font-size:${({ theme }) => theme.fontSize.s};
    text-align:center;
width:80%;
}
`;
export const StyledParagraph = styled(Paragraph)`
@media(max-width:1030px) {
    font-size:${({ theme }) => theme.fontSize.xs};
    width:80%;
    text-align:center;
}
`