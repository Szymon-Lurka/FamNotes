import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../../../../action';
import store from '../../../../store/index';
import Heading from '../../../atoms/Heading/Heading';
import TaskCard from '../../../molecules/TaskCard/TaskCard';
import plusIcon from '../../../../assets/svg/plus.svg';
import NotesViewModal from './NotesViewModal';

import {
    StyledWrapper,
    StyledAddButton,
} from '../../../../views/styles/MyRoomsStyles';

const NotesView = ({ getNotes }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    let state = store.getState();
    getNotes();
    const handleButtonAddClick = async () => {
        setIsModalActive(true);
        state = await store.getState();
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
            {state.notes !== undefined ?
                state.notes.length > 0 ? (
                    state.notes.map(note => (
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


export default connect(null, mapDispatchToProps)(NotesView);