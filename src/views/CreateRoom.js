import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import {
    StyledWrapper,
    StyledMainHeading,
} from './styles/CreateRoomStyles';
import CreateGroupForm from '../components/organisms/CreateRoomUtils/CreateGroupForm';
import HasGroup from '../components/organisms/CreateRoomUtils/HasGroup';
const CreateRoom = () => {
    const local = JSON.parse(localStorage.getItem('state'));
    const groupID = local.userGroupID;
    const groupTag = local.groupTag;
    return (
        <>
            {local.isCreatedGroup ? (
                <MainPagesTemplate>
                    <StyledWrapper>
                        <StyledMainHeading>Pomyślnie stworzono grupę!</StyledMainHeading>
                    </StyledWrapper>
                </MainPagesTemplate>
            ) : (
                    groupID === null ? (
                        <MainPagesTemplate>
                            <CreateGroupForm />
                        </MainPagesTemplate>
                    ) : (
                            <MainPagesTemplate>
                                <HasGroup
                                    groupTag={groupTag}
                                />
                            </MainPagesTemplate>
                        )
                )}
        </>
    );
}

export default CreateRoom;
