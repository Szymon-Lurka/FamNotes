import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { createGroup } from '../action';
import {
    StyledWrapper,
    StyledMainHeading,
    StyledInput,
    StyledTextArea,
    StyledButton,
    StyledParagraph,
    StyledGroupButton,
    StyledGroupWrapper,
} from './styles/CreateRoomStyles';

const CreateRoom = ({ createGroup }) => {
    const local = JSON.parse(localStorage.getItem('state'));
    const groupID = local.userGroupID;
    const groupTag = local.groupTag;
    return (
        <>
            {local.isCreatedGroup ? (
                <MainPagesTemplate>
                    <StyledWrapper>
                        <StyledMainHeading>Pomyślnie stworzono grupę!</StyledMainHeading>
                    </StyledWrapper>
                </MainPagesTemplate>
            ) : (
                    groupID === null ? (
                        <MainPagesTemplate>
                            <StyledWrapper>
                                <StyledMainHeading
                                    main="true"
                                    as="h2">
                                    Stwórz swoją własną grupę!
                                    </StyledMainHeading>
                                <StyledMainHeading
                                    as="h2">
                                    Na początek wpisz nazwę swojej grupy.
                                    </StyledMainHeading>
                                <StyledParagraph>To jest twoja grupa - pełna dowolność nazewnictwa.</StyledParagraph>
                                <Formik
                                    initialValues={{ name: '', description: '', tag: '', }}
                                    onSubmit={({ name, description, tag }) => {
                                        createGroup(name, description, tag);
                                    }}
                                >
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
                                </Formik>
                            </StyledWrapper>
                        </MainPagesTemplate>
                    ) : (
                            <MainPagesTemplate>
                                <StyledGroupWrapper>
                                    <StyledMainHeading
                                        as="h2">
                                        Jesteś już członkiem jednej grupy!
                                        </StyledMainHeading>
                                    <StyledMainHeading
                                        as="h2">
                                        Brakuje członków w grupie? Zaproś innych do swojej grupy!
                                        </StyledMainHeading>
                                    <StyledMainHeading
                                        as="h2">
                                        Tag twojej grupy: <span>{groupTag}</span>
                                    </StyledMainHeading>
                                    <StyledGroupButton
                                        as={Link}
                                        to="/room">
                                        Przejdź do swojej grupy!
                                        </StyledGroupButton>
                                </StyledGroupWrapper>
                            </MainPagesTemplate>
                        )
                )}
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    createGroup: (name, description, tag) => dispatch(createGroup(name, description, tag)),
})

CreateRoom.propTypes = {
    createGroup: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreateRoom);
