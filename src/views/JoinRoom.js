import React, { useState } from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';
import HasNoGroup from '../components/molecules/JoinRoomUtils/HasNoGroup';
import JoinedToGroup from '../components/molecules/JoinRoomUtils/JoinedToGroup';
import HasGroup from '../components/molecules/JoinRoomUtils/HasGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
margin-top: 100px;
`;

const JoinRoom = ({ userGroupID }) => {
    const [isJoined, setIsJoined] = useState(false);
    return (
        <MainPagesTemplate>
            <StyledWrapper>
                {userGroupID !== null ?
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

const mapStateToProps = ({ userGroupID }) => ({
    userGroupID
});

JoinRoom.propTypes = {
    userGroupID: PropTypes.string,
};

export default connect(mapStateToProps)(JoinRoom);
