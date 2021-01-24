import React from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';
import HasGroup from '../components/organisms/MyRoomsUtils/HasGroup';
import HasNoGroup from '../components/organisms/MyRoomsUtils/HasNoGroup';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
margin-top:100px;
position:absolute;
animation: opacityAnim 0.55s ease-in-out both;
min-height: 100vh;
`;
const StyledBackground = styled.div`
width:100vw;
height:89.3%;
background-color: ${({ theme }) => theme.colors.secondary};
z-index:1;

`;

const MyRooms = ({ groupTag }) => {
    if (groupTag === undefined) {
        groupTag = null;
    };
    return (
        <MainPagesTemplate>
            <StyledBackground />
            <StyledWrapper>
                {groupTag !== null ?
                    <HasGroup />
                    :
                    <HasNoGroup />
                }
            </StyledWrapper>
        </MainPagesTemplate>
    );
}
const mapStateToProps = ({ groupTag }) => ({
    groupTag,
});

export default connect(mapStateToProps)(MyRooms);
