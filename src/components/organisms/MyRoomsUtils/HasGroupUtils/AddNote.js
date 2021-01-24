import React from 'react';
import { Form } from 'formik';

import {
    StyledModalWrapper,
    StyledHeading,
    StyledInput,
    StyledTextArea,
    StyledSubmitButton,
} from '../../../../views/styles/MyRoomsStyles';

const AddNote = ({ handleChange, handleBlur, values }) => (
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
            <StyledSubmitButton
                type="submit"
            >Dodaj zadanie!</StyledSubmitButton>
        </StyledModalWrapper>
    </Form>
);

export default AddNote;
