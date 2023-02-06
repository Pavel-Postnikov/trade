import styled from "styled-components";
import React from "react";

const TopMenu = styled.div`
    display: flex;
    gap: 10px;
    position: fixed;
    top: 10px;
`

const MenuButton = styled.div`
    border: 1px solid navajowhite;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background: cadetblue;
    }
`

function Menu() {
    return (
        <TopMenu>
            <MenuButton>Home</MenuButton>
            <MenuButton>Random Game</MenuButton>
        </TopMenu>
    )
}

export default React.memo(Menu)