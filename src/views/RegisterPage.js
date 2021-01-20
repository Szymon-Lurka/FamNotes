import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/atoms/Button/Button';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import AccountPanelTemplate from '../components/templates/AccountPanelTemplate';
import {
    StyledLabel,
    StyledWarningInput,
    StyledWrapper,
    StyledForm,
    StyledSmallButton,
    StyledInfoLink,
    StyledHeading,
    StyledRegisterSuccessButton,
} from '../theme/AccountPanelTemplateStyles';

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
                                    <Heading as="h2">{registerMessage}</Heading>
                                    <StyledRegisterSuccessButton
                                        as={Link}
                                        to="/login">
                                        Chcę się zalogować!
                                 </StyledRegisterSuccessButton>
                                </StyledForm>
                            ) : (
                                    <StyledForm>
                                        {infoMessage.length === 29 || infoMessage.length === 71 ? (
                                            <StyledLabel>
                                                {infoMessage}
                                                <StyledWarningInput
                                                    placeholder="LOGIN"
                                                    type="text"
                                                    name="login"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.login}
                                                />
                                            </StyledLabel>
                                        ) : null}
                                        {infoMessage === '' || infoMessage.length === 68 ? (
                                            <Input
                                                placeholder="LOGIN"
                                                type="text"
                                                name="login"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.login}
                                            />
                                        ) : null}
                                        {infoMessage.length === 68 ? (
                                            <StyledLabel>
                                                {infoMessage}
                                                <StyledWarningInput
                                                    placeholder="HASŁO"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                            </StyledLabel>
                                        ) : (
                                                <Input
                                                    placeholder="HASŁO"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                            )}
                                        <Button
                                            type="submit"
                                        >Zarejestruj się!
                                 </Button>
                                        <StyledSmallButton
                                            secondary
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
