import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
*,*::before,*::after {
    box-sizing:border-box;
}
body {
    font-size:1.6rem;
    font-family:'Montserrat',sans-serif;
    padding: 0;
    margin: 0;
    overflow-x:hidden;
}
html {
    font-size: 62.5%;
}
`;

export default GlobalStyle;
