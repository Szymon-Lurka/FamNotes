import styled from 'styled-components';

const Input = styled.input`
padding: 15px 30px;
font-size: ${({ theme }) => theme.fontSize.s};
font-weight: ${({ theme }) => theme.light};
background-color: hsl(0,0%,96%);
border:none;
border-radius: 50px;
::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: hsl(0, 0%, 70%);
}
`;

export default Input;