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
@keyframes mainAnim {
    0%{opacity:0}
    100%{opacity:100}
}
@keyframes groupCreatedAnim {
    0%{transform:scale(1)}
    100%{transform:scale(20)}
}
@keyframes groupCreatedInfoAnim {
    0%{opacity:0}
    100%{opacity:1}
}
@keyframes myRoomFade {
    0%{transform:translateY(-100%)}
    100%{transform:translateY(0%)}
}
@keyframes settingsFade {
    100%{transform:translateX(0%)}
}
`;

export default GlobalStyle;
