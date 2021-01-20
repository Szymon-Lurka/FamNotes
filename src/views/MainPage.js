import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { Redirect } from 'react-router';
import {
    StyledWrapper,
    StyledWelcomeHeading,
    StyledNoGroupWrapper,
    StyledNoGroupHeading,
    StyledNoGroupParagraph,
    StyledNoGroupButtonsWrapper,
    StyledNoGroupButton,
    StyledNoGroupInfoHeading,
    StyledNoGroupInfoWrapper,
} from './styles/MainPageStyles';
import { Link } from 'react-router-dom';
import Heading from '../components/atoms/Heading/Heading';

const MainPage = () => {
    const local = localStorage.getItem('state');
    const isGroup = JSON.parse(local).userGroupID;
    if (!JSON.parse(local).isLogged) {
        return <Redirect to="/login" />
    }
    const { nickName } = JSON.parse(localStorage.getItem('state'));

    return (
        <MainPagesTemplate>
            {local ? (
                <StyledWrapper>
                    <StyledWelcomeHeading>Witaj <span>{nickName[0].toUpperCase() + nickName.substring(1)}</span>! Co słychać?</StyledWelcomeHeading>
                    {isGroup !== null ? (
                        <Heading>Przejdź do swoich grup!</Heading>
                    ) : (
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
                        )}
                </StyledWrapper>
            ) : null}
        </MainPagesTemplate>
    );
}

export default MainPage;