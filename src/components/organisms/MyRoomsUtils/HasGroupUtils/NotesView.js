import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../../../../action';
import Heading from '../../../atoms/Heading/Heading';
import TaskCard from '../../../molecules/TaskCard/TaskCard';
import plusIcon from '../../../../assets/svg/plus.svg';
import NotesViewModal from './NotesViewModal';
import PropTypes from 'prop-types';

import {
    StyledWrapper,
    StyledAddButton,
} from '../../../../views/styles/MyRoomsStyles';

const NotesView = ({ getNotes, notes }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    useEffect(() => {
        getNotes();
    }, []);
    const handleButtonAddClick = async () => {
        setIsModalActive(true);
    }
    const closeModal = async () => {
        setIsModalActive(false);
    }
    return (
        <StyledWrapper>
            <NotesViewModal
                isVisible={isModalActive}
                closeModal={closeModal}
            />
            {notes !== undefined ?
                notes.length > 0 ? (
                    notes.map(note => (
                        <>
                            <TaskCard
                                title={note.title}
                                date={note.createdAt.slice(0, 10)}
                                content={note.content}
                                author={note.author}
                                id={note.id}
                                key={note.id}
                            />
                        </>
                    ))

                ) : <Heading>Nie znaleziono żadnych zadań!</Heading>
                :
                (
                    <>
                        <Heading>Proszę odśwież stronę!</Heading>
                    </>
                )
            }
            <StyledAddButton
                onClick={handleButtonAddClick}
            >
                <img src={plusIcon} alt="adding" />
            </StyledAddButton>
        </StyledWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    getNotes: () => dispatch(getNotes())
})

const mapStateToProps = (state) => ({
    notes: state.notes,
})

NotesView.propTypes = {
    getNotes: PropTypes.func,
    notes: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesView);