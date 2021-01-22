import React, { useState } from 'react';
import MainPagesTemplate from '../components/templates/MainPagesTemplate';
import styled from 'styled-components';
import HasGroup from '../components/organisms/MyRoomsUtils/HasGroup';
import HasNoGroup from '../components/organisms/MyRoomsUtils/HasNoGroup';

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

const MyRooms = () => {
    // const [isBodyClicked, setIsBodyClicked] = useState(false);
    const local = JSON.parse(localStorage.getItem('state'));
    return (
        <MainPagesTemplate>
            <StyledBackground />
            <StyledWrapper>
                {local.groupTag !== null ?
                    <HasGroup
                        local={local}
                    />
                    :
                    <HasNoGroup />
                }
            </StyledWrapper>
        </MainPagesTemplate>
    );
}



export default MyRooms;
