import React from 'react';
import plusIcon from '../../../../assets/svg/plus.svg';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addNote } from '../../../../action';
import AddNote from './AddNote';
import PropTypes from 'prop-types';

import {
    StyledModal,
    StyledBackgroundModal,
    StyledCloseButton,
} from '../../../../views/styles/MyRoomsStyles';

const NotesViewModal = ({ closeModal, isVisible, addNote }) => {
    return (
        <>
            <StyledBackgroundModal
                isVisible={isVisible}
            />
            <StyledModal
                isVisible={isVisible}>
                <StyledCloseButton src={plusIcon} onClick={closeModal} />
                <Formik
                    initialValues={{ title: '', content: '' }}
                    onSubmit={async ({ title, content }) => {
                        await addNote(title, content)
                        closeModal();
                    }}
                >
                    {({ handleChange, handleBlur, values }) => {
                        return (
                            <AddNote
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                        )
                    }}
                </Formik>
            </StyledModal>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    addNote: (title, content) => dispatch(addNote(title, content))
});

NotesViewModal.propTypes = {
    closeModal: PropTypes.func,
    isVisible: PropTypes.bool,
    addNote: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(NotesViewModal);