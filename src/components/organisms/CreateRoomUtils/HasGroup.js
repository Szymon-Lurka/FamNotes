import {
    StyledWrapper,
    StyledMainHeading,
    StyledGroupButton,
    StyledGroupWrapper,
} from '../../../views/styles/CreateRoomStyles';
import { Link } from 'react-router-dom';

const HasGroup = ({ groupTag }) => (
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
);

export default HasGroup;
