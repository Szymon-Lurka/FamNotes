import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledCreatedGroupWrapper,
    StyledHeadingsWrapper,
    StyledHeading,
    StyledCreatedGroupParagraph,
    StyledCreatedGroupButton,
} from '../../../../views/styles/CreateRoomStyles';

const GroupCreated = () => (
    <StyledCreatedGroupWrapper>
        <StyledHeadingsWrapper>
            <StyledHeading
                as="h2">
                Super! Właśnie założyłeś grupę!
                </StyledHeading>
            <StyledCreatedGroupParagraph>
                Możesz teraz podzielić się TAG'iem grupy ze znajomymi i razem dodawać nowe zadania!
                </StyledCreatedGroupParagraph>
            <StyledCreatedGroupButton
                as={Link}
                to="/room">
                Przejdź do swojej grupy!
                </StyledCreatedGroupButton>
        </StyledHeadingsWrapper>
    </StyledCreatedGroupWrapper>
);


export default GroupCreated;
