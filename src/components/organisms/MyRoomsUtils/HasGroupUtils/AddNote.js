import React from 'react';
import { Form } from 'formik';

import {
    StyledModalWrapper,
    StyledHeading,
    StyledInput,
    StyledTextArea,
    StyledButton,
} from '../../../../views/styles/MyRoomsStyles';

const AddNote = ({ handleChange, handleBlur, values }) => {
    return (
        <Form>
            <StyledModalWrapper>
                <StyledHeading>
                    Dodaj zadanie:
                                </StyledHeading>
                <StyledInput
                    placeholder="Nazwa zadania"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="title"
                    value={values.title}
                /> <StyledTextArea
                    as="textarea"
                    placeholder="Treść zadania"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="content"
                    value={values.content}
                />
                <StyledButton
                    type="submit"
                >Dodaj zadanie!</StyledButton>
            </StyledModalWrapper>
        </Form>
    );
}

export default AddNote;