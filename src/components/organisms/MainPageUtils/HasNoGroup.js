import {
    StyledNoGroupWrapper,
    StyledNoGroupHeading,
    StyledNoGroupParagraph,
    StyledNoGroupButton,
    StyledNoGroupButtonsWrapper,
    StyledNoGroupInfoWrapper,
    StyledNoGroupInfoHeading,
} from '../../../views/styles/MainPageStyles';
import { Link } from 'react-router-dom';

const HasNoGroup = () => (
    <StyledNoGroupWrapper>
        <StyledNoGroupHeading>
            Jeszcze nie należysz do żadnej grupy.
        <span>Ale prędko możesz to zmienić!</span>
        </StyledNoGroupHeading>
        <StyledNoGroupParagraph>
            Dołącz lub załóz już teraz!
        </StyledNoGroupParagraph>
        <StyledNoGroupButtonsWrapper>
            <StyledNoGroupButton
                as={Link}
                to="/room/join">
                Dołącz!
            </StyledNoGroupButton>
            <StyledNoGroupButton
                as={Link}
                to="/room/create"
            >
                Stwórz własną!
            </StyledNoGroupButton>
        </StyledNoGroupButtonsWrapper>
        <StyledNoGroupInfoWrapper>
            <StyledNoGroupInfoHeading>
                Dalej nie wiesz o co chodzi w FAMNOTES?
        </StyledNoGroupInfoHeading>
            <StyledNoGroupButton
                info="true"
                as={Link}
                to="/info"
            >
                Dowiedz się więcej!
        </StyledNoGroupButton>
        </StyledNoGroupInfoWrapper>
    </StyledNoGroupWrapper>
)

export default HasNoGroup;
