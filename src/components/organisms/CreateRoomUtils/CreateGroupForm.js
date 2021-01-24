import React, { useState } from 'react';
import {
    StyledMainHeading,
    StyledParagraph,
    StyledButton,
} from '../../../views/styles/CreateRoomStyles';
import { Form } from 'formik';
import CreateGroup from './CreateGroup';
import { connect } from 'react-redux';
import BadName from './CreateGroupFormUtils/BadName';
import BadDescription from './CreateGroupFormUtils/BadDescription';
import BadTag from './CreateGroupFormUtils/BadTag';

const CreateGroupForm = ({ failedMessage }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmitClick = () => {
        setIsSubmitted(true);
    }
    return (
        <CreateGroup>
            {({ handleChange, handleBlur, values }) => {
                return (
                    <Form>
                        <BadName
                            failedMessage={failedMessage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            isSubmitted={isSubmitted}
                        />
                        <StyledMainHeading
                            second="true"
                            as="h2">
                            Grupa nazwana? To teraz możesz ją krótko opisać.
                    </StyledMainHeading>
                        <StyledParagraph
                            second="true">
                            Jaki jest cel tej grupy? Daj znać przyszłym członkom grupy po co właściwie tu są!
                    </StyledParagraph>
                        <BadDescription
                            failedMessage={failedMessage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            isSubmitted={isSubmitted}
                        />
                        <StyledMainHeading
                            third="true"
                            as="h2">
                            Na koniec dodaj tag! (Max. 6 znaków)
                                                    </StyledMainHeading>
                        <StyledParagraph
                            third="true">
                            Inni użytkownicy będą mogli dołączyć do twojej grupy wpisując jej tag!
                                                    </StyledParagraph>
                        <BadTag
                            failedMessage={failedMessage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tag}
                            isSubmitted={isSubmitted}
                        />
                        <StyledButton
                            type="submit"
                            onClick={handleSubmitClick}
                        >
                            Utwórz grupę!
                    </StyledButton>
                    </Form>
                )
            }}
        </CreateGroup>
    );
};

const mapStateToProps = (store) => ({
    failedMessage: store.failedMessage,
})

export default connect(mapStateToProps)(CreateGroupForm);
