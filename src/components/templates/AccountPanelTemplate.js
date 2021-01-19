import React, { useEffect } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Input from '../atoms/Input/Input';
// import Paragraph from '../atoms/Paragraph/Paragraph';
import Button from '../atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import backgroundImg from '../../assets/img/background.png';
import PropTypes from 'prop-types';
import {
    Formik,
    Form,
} from 'formik';
import { connect } from 'react-redux';
import { authenticate, userRegister } from '../../action/index';

const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url(${backgroundImg});
`;
const StyledForm = styled.div`
width: 30%;
height: 40%;
border-radius: 25px;
background-color: white;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
grid-gap:25px;
@media(max-width:1065px) {
    width: 50%;
}
@media(max-width:640px) {
    width:80%;
    height:50%;
}
@media(max-width: 380px) {
    height:60%;
}
`;
const StyledSmallButton = styled(Button)`
background:none;
width: 50%;
text-decoration: underline;
display: block;
color: black;
text-align:center;
@media(max-width:1572px) {
    width: 60%;
}
@media(max-width:1310px) {
    font-size: 1.3rem;
}
`;
const StyledInfoLink = styled(Heading)`
color: black;
margin-top: 25px;
text-decoration:none;
cursor:pointer;
@media(max-width: 470px) {
    font-size: 1.6rem;
}
& span {
    background-color:#FAB800;
    padding: 8px;
    border-radius: 35px;
    transition:.3s;
    &:hover {
        background-color: black;
        color:white;
    }
}
`;
const StyledHeading = styled(Heading)`
@media(max-width:947px) {
    width: 60%;
    text-align:center;
}
@media(max-width:724px) {
    width: 80%;
    font-size: 1.8rem;
}
`;
const AccountPanelTemplate = ({ register, authenticate, isLogged: { isLogged }, userRegister, }) => {
    // useEffect(() => {
    //     if (isLogged === 'ok') {
    //         console.log("no niby działa");
    //         return <Redirect to="/" />
    //     } else if (isLogged === undefined) {
    //         return;
    //     }
    // }, [isLogged]);
    if (isLogged) {
        return <Redirect to="/" />
    }
    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={({ login, password }) => {
                if (register) {
                    userRegister(login, password);
                } else {
                    authenticate(login, password);
                }
            }}
        >
            {({ handleChange, handleBlur, values }) => {
                return (
                    <Form>
                        <StyledWrapper>
                            <Heading as="h2">FAMNOTES</Heading>
                            <StyledHeading>Twoja nowa ulubiona aplikacja do zarządzania obowiązkami w domu!</StyledHeading>
                            <StyledForm>
                                <Heading as="h2">{register ? "Zarejestruj się!" : "Zaloguj się!"}</Heading>
                                <Input
                                    placeholder="LOGIN"
                                    type="text"
                                    name="login"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.login}
                                />
                                <Input
                                    placeholder="HASŁO"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <Button type="submit">{register ? "Zarejestruj się!" : "Zaloguj się!"}</Button>
                                <StyledSmallButton secondary as={Link} to={register ? "/login" : "/register"}>{register ? "Chcę się zalogować!" : "Chcę się zarejestrować!"}</StyledSmallButton>
                            </StyledForm>
                            <StyledInfoLink as={Link} to="/info">Dowiedz się więcej o <span>FAMNOTES</span></StyledInfoLink>
                        </StyledWrapper>
                    </Form>
                )
            }}
        </Formik>
    );
}

AccountPanelTemplate.propTypes = {
    register: PropTypes.bool,
    authenticate: PropTypes.func,
    userID: PropTypes.string,
    userRegister: PropTypes.func,
};
AccountPanelTemplate.defaultProps = {
    register: null,
};

const mapStateToProps = (isLogged = false, nickName = false) => ({
    isLogged, nickName
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
    userRegister: (username, password) => dispatch(userRegister(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPanelTemplate);
