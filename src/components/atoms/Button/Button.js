import styled from 'styled-components';

const Button = styled.button`
padding:0;
background-color: #FBC14D;
width: 220px;
height: 47px;
border:none;
border-radius:50px;
font-family:'Montserrat';
font-weight: ${({ theme }) => theme.bold};
font-size: ${({ theme }) => theme.fontSize.s};
text-transform:uppercase;
`;

export default Button;