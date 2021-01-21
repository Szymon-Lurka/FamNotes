import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import AccountPanelTemplate from '../components/templates/AccountPanelTemplate';
import {
    StyledWrapper,
    StyledForm,
    StyledSmallButton,
    StyledInfoLink,
    StyledHeading,
    StyledRegisterSuccessButton,
    StyledHeadingInfo,
} from '../theme/AccountPanelTemplateStyles';
import BadLogin from '../components/molecules/RegisterPageUtils/BadLogin';
import BadPassword from '../components/molecules/RegisterPageUtils/BadPassword';

const RegisterPage = ({ isRegisterSuccess, registerMessage }) => {
    const [infoMessage, setInfoMessage] = useState('');
    useEffect(() => {
        setInfoMessage(registerMessage)
    }, [registerMessage]);
    return (
        <AccountPanelTemplate register>
            {({ handleChange, handleBlur, values }) => {
                return (
                    <Form>
                        <StyledWrapper>
                            <Heading as="h2">FAMNOTES</Heading>
                            <StyledHeading>
                                Twoja nowa ulubiona aplikacja do zarządzania obowiązkami w domu!
                                </StyledHeading>
                            {isRegisterSuccess ? (
                                <StyledForm>
                                    <StyledHeadingInfo as="h2">{registerMessage}</StyledHeadingInfo>
                                    <StyledRegisterSuccessButton
                                        as={Link}
                                        to="/login">
                                        Chcę się zalogować!
                                 </StyledRegisterSuccessButton>
                                </StyledForm>
                            ) : (
                                    <StyledForm>
                                        <BadLogin
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            value={values.login}
                                            infoMessage={infoMessage}
                                        />
                                        <BadPassword
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            infoMessage={infoMessage}
                                            value={{ login: values.login, password: values.password }}
                                        />
                                        <Button
                                            type="submit"
                                        >Zarejestruj się!
                                 </Button>
                                        <StyledSmallButton
                                            secondary="true"
                                            as={Link}
                                            to="/login">
                                            Chcę się zalogować!
                                 </StyledSmallButton>
                                    </StyledForm>
                                )}
                            <StyledInfoLink
                                as={Link}
                                to="/info">
                                Dowiedz się więcej o <span>FAMNOTES</span>
                            </StyledInfoLink>
                        </StyledWrapper>
                    </Form>
                )
            }}
        </AccountPanelTemplate>
    );
}

const mapStateToProps = (store) => ({
    isRegisterSuccess: store.isRegisterSuccess,
    registerMessage: store.registerMessage,
})

RegisterPage.propTypes = {
    isRegisterSuccess: PropTypes.bool,
    registerMessage: PropTypes.string,
};

export default connect(mapStateToProps)(RegisterPage);
