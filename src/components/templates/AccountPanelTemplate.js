import React, { useState, useEffect } from 'react';
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


const AccountPanelTemplate = ({ register, authenticate, isLogged, userRegister, isRegisterSuccess }) => {
    const [registerState, setRegisterState] = useState(false);
    useEffect(() => {
        if (isRegisterSuccess === false && register) {
            setRegisterState(true);
        } else {
            setRegisterState(false);
        }
    }, [isRegisterSuccess])
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
            {({ handleChange, handleBlur, values, isSubmitting }) => {
                return (
                    <Form>
                        {console.log(isRegisterSuccess)}
                        <StyledWrapper>
                            <Heading as="h2">FAMNOTES</Heading>
                            <StyledHeading>Twoja nowa ulubiona aplikacja do zarządzania obowiązkami w domu!</StyledHeading>
                            <StyledForm>
                                <Heading as="h2">{register ? isRegisterSuccess ? "Pomyślnie zarejestrowano!" : "Zarejestruj się!" : "Zaloguj się!"}</Heading>
                                {registerState ? (
                                    <StyledLabel style={{ color: 'red' }}>
                                        Użytkownik o takiej nazwie już istnieje!
                                        <StyledWarningInput
                                            placeholder="LOGIN"
                                            type="text"
                                            name="login"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.login}
                                        />
                                    </StyledLabel>
                                ) : (
                                        <Input
                                            placeholder="LOGIN"
                                            type="text"
                                            name="login"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.login}
                                            isVisible={isRegisterSuccess && register}
                                        />
                                    )}

                                <Input
                                    placeholder="HASŁO"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    isVisible={isRegisterSuccess && register}
                                />
                                <Button
                                    type="submit"
                                    disabled={register && isRegisterSuccess}
                                    isVisible={isRegisterSuccess && register}
                                >
                                    {register ? "Zarejestruj się!" :
                                        "Zaloguj się!"}
                                </Button>
                                <StyledSmallButton
                                    secondary
                                    as={Link}
                                    to={register ? "/login" : "/register"}>
                                    {register ? "Chcę się zalogować!" : "Chcę się zarejestrować!"}
                                </StyledSmallButton>
                            </StyledForm>
                            <StyledInfoLink
                                as={Link}
                                to="/info">
                                Dowiedz się więcej o <span>FAMNOTES</span>
                            </StyledInfoLink>
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
    isRegisterSuccess: PropTypes.bool,
    isLogged: PropTypes.bool,
};
AccountPanelTemplate.defaultProps = {
    register: null,
    isLogged: false,
};

const mapStateToProps = (store) => ({
    isLogged: store.isLogged,
    isRegisterSuccess: store.isRegisterSuccess,
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
    userRegister: (username, password) => dispatch(userRegister(username, password))
});

const StyledLabel = styled.label`
color: red;
text-align:center;
width: 100%;
`;
const StyledWarningInput = styled(Input)`
background-color: #A1030399;
`;
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
opacity: ${({ isVisible }) => isVisible ? "0" : "1"};
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountPanelTemplate);
