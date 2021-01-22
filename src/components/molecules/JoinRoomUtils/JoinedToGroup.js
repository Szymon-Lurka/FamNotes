import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledJoinedWrapper,
    StyledJoinedHeading,
    StyledJoinedButton,
    StyledJoinedParagraph,
} from '../../../views/styles/JoinRoomStyles';

const JoinedToGroup = () => {
    return (
        <StyledJoinedWrapper>
            <StyledJoinedHeading>Dołączyłeś właśnie do grupy!</StyledJoinedHeading>
            <StyledJoinedParagraph>Możesz już zacząć dodawać zadania do swojej grupy!</StyledJoinedParagraph>
            <StyledJoinedButton as={Link} to="/room">Przejdź do grupy!</StyledJoinedButton>
        </StyledJoinedWrapper>
    );
}

export default JoinedToGroup;