import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    StyledHeading,
    StyledParagraph,
    StyledButton,
} from './styles/MainPageStyles';

const MainPage = ({ isLogged }) => {
    const local = JSON.parse(localStorage.getItem('state'));
    if (!isLogged) {
        return <Redirect to="/login" />
    };
    const isGroup = local.userGroupID;
    if (local.isCreatedGroup) {
        return <Redirect to="/room/create" />
    };
    const { nickName } = JSON.parse(localStorage.getItem('state'));

    return (
        <MainPagesTemplate>
            {local ? (
                <StyledWrapper>
                    <StyledWelcomeHeading>Witaj <span>{nickName[0].toUpperCase() + nickName.substring(1)}</span>! Co słychać?</StyledWelcomeHeading>
                    {isGroup !== null ? (
                        <>
                            <StyledHeading as="h2">Jesteś już członkiem jednej grupy!</StyledHeading>
                            <StyledParagraph>Niestety - na aktualnym etapie tworzenia aplikacji możesz posiadać tylko jedną grupę.</StyledParagraph>
                            <StyledButton
                                as={Link} to="/room"
                            >Przejdź do swojej grupy</StyledButton>
                        </>
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

const mapStateToProps = (state) => ({
    isLogged: state.isLogged
});

MainPage.propTypes = {
    isLogged: PropTypes.bool,
};


export default connect(mapStateToProps)(MainPage);