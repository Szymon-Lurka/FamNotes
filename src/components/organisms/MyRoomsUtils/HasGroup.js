import React from 'react';
import NotesView from './HasGroupUtils/NotesView';

import {
    StyledGroupWrapper,
    StyledHeadingWrapper,
    StyledGroupHeading,
} from '../../../views/styles/MyRoomsStyles';

const HasGroup = ({ local }) => {
    console.log(local);
    return (
        <StyledGroupWrapper>
            <StyledHeadingWrapper>
                <StyledGroupHeading as="h2">Witaj na zakładce strony: <span>{local.groupTitle}</span></StyledGroupHeading>
                <StyledGroupHeading as="h2">Tag twojej grupy to: <span>{local.groupTag}</span></StyledGroupHeading>
            </StyledHeadingWrapper>
            <NotesView
                local={local}
            />
        </StyledGroupWrapper>
    );
}

export default HasGroup;