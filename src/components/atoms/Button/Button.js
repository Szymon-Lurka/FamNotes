import styled from 'styled-components';

const Button = styled.button`
padding:0;
background-color: ${({ theme }) => theme.colors.primary};
width: 220px;
height: 47px;
border:none;
border-radius:50px;
font-family:'Montserrat';
font-weight: ${({ theme }) => theme.bold};
font-size: ${({ theme }) => theme.fontSize.s};
text-transform:uppercase;
display:${({ isVisible }) => isVisible ? "none" : "block"};
`;

export default Button;