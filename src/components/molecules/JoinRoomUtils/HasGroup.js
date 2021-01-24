import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledHasGroupWrapper,
    StyledHasGroupHeading,
    StyledHasGroupParagraph,
    StyledHasGroupButtonsWrapper,
    StyledHasGroupButton,
} from '../../../views/styles/JoinRoomStyles';

const HasGroup = () => (
    <StyledHasGroupWrapper>
        <StyledHasGroupHeading>Jesteś już członkiem jednej grupy!</StyledHasGroupHeading>
        <StyledHasGroupParagraph>Jeśli chcesz przejść do innej grupy najpierw musisz wyjść z aktualnej!</StyledHasGroupParagraph>
        <StyledHasGroupParagraph>Możesz to zrobić w ustawieniach.</StyledHasGroupParagraph>
        <StyledHasGroupButtonsWrapper>
            <StyledHasGroupButton
                as={Link}
                to="/account"
            >Ustawienia</StyledHasGroupButton>
            <StyledHasGroupButton
                as={Link}
                to="/room"
            >Twoja grupa</StyledHasGroupButton>
        </StyledHasGroupButtonsWrapper>
    </StyledHasGroupWrapper>
);

export default HasGroup;
