import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
background: forestgreen;
color: crimson;
height: 150px;
width: 100%;
text-align: center
@media (max-width: 768px) {
    font-size: 10px
}

`;


const JumboTron = () => {

    return (
        <StyledDiv>
            <p>My dad has a dog named Cotton. Throughout this December he has been taking pictures of Cotton in other people's yards, in front of
            their Christmas decorations. In celebration of the Christmas, dogs, decorations, and quite possibly trespassing;
            Cotton would like to wish you a...
            </p>

            <h2>Merry Cotton Christmas</h2>

        </StyledDiv>
    )
}

export default JumboTron;

