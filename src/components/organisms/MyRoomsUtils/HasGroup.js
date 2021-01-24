import React from 'react';
import NotesView from './HasGroupUtils/NotesView';
import { connect } from 'react-redux';

import {
    StyledGroupWrapper,
    StyledHeadingWrapper,
    StyledGroupHeading,
} from '../../../views/styles/MyRoomsStyles';

const HasGroup = ({ groupTitle, groupTag }) => (
    <StyledGroupWrapper>
        <StyledHeadingWrapper>
            <StyledGroupHeading
                as="h2">
                Witaj na zakładce strony:
                <span>{groupTitle}</span>
            </StyledGroupHeading>
            <StyledGroupHeading
                as="h2">
                Tag twojej grupy to:
                <span>{groupTag}</span>
            </StyledGroupHeading>
        </StyledHeadingWrapper>
        <NotesView
        />
    </StyledGroupWrapper>
);

const mapStateToProps = ({ groupTitle, groupTag }) => ({
    groupTitle, groupTag
})

export default connect(mapStateToProps)(HasGroup);