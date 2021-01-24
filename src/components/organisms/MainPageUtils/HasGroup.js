import {
    StyledHeading,
    StyledParagraph,
    StyledButton
} from '../../../views/styles/MainPageStyles';
import { Link } from 'react-router-dom';

const HasGroup = () => (
    <>
        <StyledHeading
            as="h2">
            esteś już członkiem jednej grupy!
            </StyledHeading>
        <StyledParagraph>
            Niestety - na aktualnym etapie tworzenia aplikacji możesz posiadać tylko jedną grupę.
            </StyledParagraph>
        <StyledButton
            as={Link}
            to="/room">
            Przejdź do swojej grupy
            </StyledButton>
    </>
);

export default HasGroup;
