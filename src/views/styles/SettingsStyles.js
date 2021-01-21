import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
margin-top: 150px;
text-align:center;
transform:translateX(-100%);
animation: settingsFade 0.35s ease-in-out both;
`;
export const StyledHeading = styled(Heading)`

`;
export const StyledParagraph = styled(Paragraph)`
& span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
}
`;
export const StyledPanelWrapper = styled.div`
width: 80vw;
margin:100px auto 0;
display: flex;
flex-direction: column;
align-items:center;
`;
export const StyledPanelOptionsWrapper = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`;