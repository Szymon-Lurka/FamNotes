import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import NotesView from './HasGroupUtils/NotesView';

export const StyledWrapper = styled.div`
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
text-align:center;
padding-top: 80px;
`;
export const StyledHeadingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
width:100%;
padding-bottom: 70px;
border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
`;
export const StyledHeading = styled(Heading)`
& span {
    color:${({ theme }) => theme.colors.secondary};
}
`;
const HasGroup = ({ local }) => {
    console.log(local);
    return (
        <StyledWrapper>
            <StyledHeadingWrapper>
                <StyledHeading as="h2">Witaj na zakładce strony: <span>{local.groupTitle}</span></StyledHeading>
                <StyledHeading as="h2">Tag twojej grupy to: <span>{local.groupTag}</span></StyledHeading>
            </StyledHeadingWrapper>
            <NotesView
                local={local}
            />
        </StyledWrapper>
    );
}

export default HasGroup;