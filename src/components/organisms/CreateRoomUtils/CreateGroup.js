import { Formik } from 'formik';
import { createGroup } from '../../../action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    StyledWrapper,
    StyledMainHeading,
    StyledParagraph,

} from '../../../views/styles/CreateRoomStyles';

const CreateGroup = ({ children, createGroup }) => (
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
            }}
        >
            {children}
        </Formik>
    </StyledWrapper>
);

CreateGroup.propTypes = {
    children: PropTypes.func.isRequired,
    createGroup: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    createGroup: (name, description, tag) => dispatch(createGroup(name, description, tag)),
});

export default connect(null, mapDispatchToProps)(CreateGroup);
