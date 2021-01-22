import React, { useState } from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';
import HasNoGroup from '../components/molecules/JoinRoomUtils/HasNoGroup';
import JoinedToGroup from '../components/molecules/JoinRoomUtils/JoinedToGroup';
import HasGroup from '../components/molecules/JoinRoomUtils/HasGroup';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const JoinRoom = () => {
    const [isJoined, setIsJoined] = useState(false);
    let local = JSON.parse(localStorage.getItem('state'));
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                {local.userGroupID !== null ?
                    isJoined ? (
                        <JoinedToGroup />
                    ) : (
                            <HasGroup />
                        )
                    : (
                        <HasNoGroup
                            setIsJoined={setIsJoined}
                        />
                    )
                }
            </StyledWrapper>
        </MainPagesTemplate >
    );
}



export default JoinRoom;
