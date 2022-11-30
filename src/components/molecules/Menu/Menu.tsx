import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BaseContainer from "src/components/atoms/Container";

const MenuWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid white;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li a {
    display: block;
    padding: 10px 10px 5px 10px;
    margin-bottom: 5px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

const Container = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 24px;
  padding: 10px 0;
  margin: 0;
  color: white;
  font-weight: 100;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Container>
        <Logo>🤘Metal Catalogue🤘</Logo>
        <ul>
          <li>
            <NavLink to="">Newest Clips</NavLink>
          </li>
          <li>
            <NavLink to="elo">Channels</NavLink>
          </li>
          <li>
            <NavLink to="search">Search</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
