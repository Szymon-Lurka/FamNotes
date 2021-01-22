import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../../action/index';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledWrapper,
    StyledInnerWrapper,
    StyledHeading,
    StyledDateInfo,
    StyledButton
} from './TaskCardStyles';

const TaskCard = ({ title, date, content, author, id, deleteNote }) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const handleClick = id => {
        setIsDeleted(true);
        deleteNote(id);
    }
    return (
        <>
            {isDeleted ? null : (
                <StyledWrapper>
                    <StyledInnerWrapper first="true">
                        <StyledHeading main="true" as="h2">{title}</StyledHeading>
                        <StyledDateInfo main="true">{date}</StyledDateInfo>
                    </StyledInnerWrapper>
                    <StyledInnerWrapper>
                        <Paragraph>Dodane przez: {author}</Paragraph>
                        <StyledHeading as="h2">{content}</StyledHeading>
                        <StyledButton
                            onClick={() => handleClick(id)}
                        >Usuń zadanie</StyledButton>
                    </StyledInnerWrapper>
                </StyledWrapper>
            )}
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(null, mapDispatchToProps)(TaskCard);