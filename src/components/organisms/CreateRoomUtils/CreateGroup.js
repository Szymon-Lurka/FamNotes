import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { createGroup } from '../../../action/group-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    StyledWrapper,
    StyledMainHeading,
    StyledParagraph,

} from '../../../views/styles/CreateRoomStyles';
import store from '../../../store/index';
import GroupCreated from './CreateGroupUtils/GroupCreated';

const CreateGroup = ({ children, createGroup }) => {
    const [checkingState, setCheckingState] = useState(false);
    const [isGroupCreated, setIsGroupCreated] = useState(false);

    useEffect(() => {
        setIsGroupCreated(false);
        if (checkingState === false) {
            return;
        }
        let state = store.getState();
        if (state.isCreated === true) {
            setIsGroupCreated(state.isCreated);
        }
    });
    return (
        <>
            {isGroupCreated ? (
                <GroupCreated />
            ) : (
                    <StyledWrapper>
                        <StyledMainHeading
                            main="true"
                            as="h2">
                            Stwórz swoja własną grupę!
        </StyledMainHeading>
                        <StyledMainHeading
                            as="h2">
                            Na początek wpisz nazwę swojej grupy.
</StyledMainHeading>
                        <StyledParagraph>To jest twoja grupa - pełna dowolność nazewnictwa.</StyledParagraph>
                        <Formik
                            initialValues={{ name: '', description: '', tag: '' }}
                            onSubmit={({ name, description, tag }) => {
                                createGroup(name, description, tag);
                                setCheckingState(true);
                            }}
                        >
                            {children}
                        </Formik>
                    </StyledWrapper>
                )}

        </>
    );
};
CreateGroup.propTypes = {
    children: PropTypes.func.isRequired,
    createGroup: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    createGroup: (name, description, tag) => dispatch(createGroup(name, description, tag)),
});

export default connect(null, mapDispatchToProps)(CreateGroup);
