import {
    StyledMainHeading,
    StyledParagraph,
    StyledInput,
    StyledButton,
    StyledTextArea,
} from '../../../views/styles/CreateRoomStyles';
import { Form } from 'formik';
import CreateGroup from './CreateGroup';

const CreateGroupForm = () => (
    <CreateGroup>
        {({ handleChange, handleBlur, values }) => {
            return (
                <Form>
                    <StyledInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="name"
                        placeholder="Nazwa grupy"
                        value={values.name}
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
                    <StyledTextArea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="description"
                        placeholder="Opis grupy"
                        value={values.description}
                        as="textarea"
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
                    <StyledInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="tag"
                        placeholder="TAG Grupy"
                        value={values.tag}
                        third="true"
                    />
                    <StyledButton
                        type="submit">
                        Utwórz grupę!
                    </StyledButton>
                </Form>
            )
        }}
    </CreateGroup>
);

export default CreateGroupForm;
