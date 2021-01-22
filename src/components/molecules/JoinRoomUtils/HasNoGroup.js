import React, { useState } from 'react';
import store from '../../../store/index';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { joinGroup } from '../../../action';
import Button from '../../atoms/Button/Button';
import {
    StyledHeading,
    StyledParagraph,
    StyledForm,
    StyledNoGroupWrapper,
} from '../../../views/styles/JoinRoomStyles';
import HasNoGroupForm from './HasNoGroupForm';

const HasNoGroup = ({ setIsJoined, joinGroup }) => {
    const [isFailed, setIsFailed] = useState(false);
    return (
        <StyledNoGroupWrapper>
            <StyledHeading as="h2">Pragniesz dołączyć do grupy?</StyledHeading>
            <StyledParagraph>Nic prostszego! Wpisz poniżej TAG grupy do której chcesz dołączyć!</StyledParagraph>
            <Formik
                initialValues={{ tag: '' }}
                onSubmit={async ({ tag }) => {
                    await joinGroup(tag)
                    let state = store.getState();
                    if (state.isJoined) {
                        setIsJoined(true);
                        setIsFailed(false);
                    } else {
                        setIsFailed(true);
                    };
                }}>
                {({ handleChange, handleBlur, values }) => {
                    return (
                        <StyledForm
                            anim={isFailed.toString()}
                        >
                            <HasNoGroupForm
                                isFailed={isFailed}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tag}
                            />
                            <Button
                                type="submit"
                            >Dołącz do grupy!</Button>
                        </StyledForm>
                    )
                }}
            </Formik>
        </StyledNoGroupWrapper>
    );
}
const mapDispatchToProps = dispatch => ({
    joinGroup: (tag) => dispatch(joinGroup(tag))
});

HasNoGroup.propTypes = {
    joinGroup: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(HasNoGroup);