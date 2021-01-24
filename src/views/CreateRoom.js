import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import {
    StyledWrapper,
    StyledMainHeading,
} from './styles/CreateRoomStyles';
import CreateGroupForm from '../components/organisms/CreateRoomUtils/CreateGroupForm';
import HasGroup from '../components/organisms/CreateRoomUtils/HasGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateRoom = ({ groupID, groupTag, isCreatedGroup }) => (
    <>
        {isCreatedGroup ? (
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

const mapStateToProps = state => ({
    groupID: state.userGroupID,
    groupTag: state.groupTag,
    isCreatedGroup: state.isCreatedGroup,
});

CreateRoom.propTypes = {
    groupID: PropTypes.string,
    groupTag: PropTypes.string,
    isCreatedGroup: PropTypes.bool,
};

export default connect(mapStateToProps)(CreateRoom);
