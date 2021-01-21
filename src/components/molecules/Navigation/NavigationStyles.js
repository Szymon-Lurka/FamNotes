import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
width: 100vw;
height: 100px;
position:fixed;
top: 0;
left:0;
right: 0;
display:flex;
justify-content:center;
align-items:center;
background-color:orange;
z-index:9999;
`;
export const StyledUl = styled.ul`
width: 40%;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
}
@media(max-width: 600px) {
    width: 100%;
    margin-left: -20px;
}
`;
export const StyledLi = styled.li`
list-style:none;
`;
export const StyledLink = styled(NavLink)`
color:black;
text-decoration:none;
transition:.3s;
display:flex;
position:relative;
& .hint {
    position:absolute;
    bottom: -50px;
    left: -100%;
    padding: 10px;
    text-align:center;
    width: 200px;
    background-color: rgba(30,30,30,.5);
    color:white;
    border-radius:20px;
    visibility:hidden;
    opacity: 0;
}
&:hover {
color:white;
}
&:hover .hint {
    visibility:visible;
    opacity: 1;
    transition: .6s;
}
&.active img {
    background-color:white !important;
}
`;
export const StyledIcon = styled.img`
width:35px;
align-self:center;
justify-self:center;
box-sizing:content-box;
padding:10px;
border-radius: 10px;
@media(max-width: 600px) {
    width: 30px;
}
`;