import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import AccountPanelTemplate from '../components/templates/AccountPanelTemplate';
import {
    StyledLabel,
    StyledWarningInput,
    StyledWrapper,
    StyledForm,
    StyledSmallButton,
    StyledInfoLink,
    StyledHeading,
} from '../theme/AccountPanelTemplateStyles';

const LoginPage = ({ loginFailedMessage }) => {
    return (
        <AccountPanelTemplate>
            {({ handleChange, handleBlur, values }) => {
                return (
                    <Form>
                        <StyledWrapper>
                            <Heading as="h2">FAMNOTES</Heading>
                            <StyledHeading>Twoja nowa ulubiona aplikacja do zarządzania obowiązkami w domu!</StyledHeading>
                            <StyledForm>
                                {loginFailedMessage ? (
                                    <StyledLabel>
                                        {loginFailedMessage}
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
                                        />
                                    )}
                                <Input
                                    placeholder="HASŁO"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <Button
                                    type="submit"
                                >Zaloguj się!
                                </Button>
                                <StyledSmallButton
                                    secondary="true"
                                    as={Link}
                                    to="/register">
                                    Chcę się zarejestrować!
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
        </AccountPanelTemplate>
    );
}

const mapStateToProps = (state) => ({
    loginFailedMessage: state.loginFailedMessage,
});

LoginPage.propTypes = {
    loginFailedMessage: PropTypes.string,
}

export default connect(mapStateToProps)(LoginPage);