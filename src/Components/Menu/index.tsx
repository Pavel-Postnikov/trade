import {MenuLink, TopMenu} from "./Menu.Styled";

export default function Menu() {
    return (
        <TopMenu>
            <MenuLink to={'/home'}>Home</MenuLink>
            <MenuLink to={'/randomgame'}>Random Game</MenuLink>
            <MenuLink to={'/exchange'}>Exchange</MenuLink>
        </TopMenu>
    )
}