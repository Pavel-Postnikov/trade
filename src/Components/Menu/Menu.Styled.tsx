import styled from "styled-components";
import {Link} from "react-router-dom";

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  position: fixed;
  top: 10px;
`

export const MenuLink = styled(Link)`
  border: 1px solid navajowhite;
  border-radius: 10px;
  padding: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:active {
    color: white;
    background: red;
  }
  &:hover {
    color: white;
    background: cadetblue;
  }
`
