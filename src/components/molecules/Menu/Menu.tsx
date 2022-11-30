import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BaseContainer from "src/components/atoms/Container";

const MenuWrapper = styled.div`
  position: fixed;
  border-top: 1px solid white;
  bottom: 0;
  left: 0;
  width: 100%;
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
    gap: 15px;
  }
  @media (min-width: 776px) {
    position: relative;
    border-top: none;
    border-bottom: 1px solid white;
  }
`;

const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
  @media (min-width: 776px) {
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  display: none;
  font-size: 24px;
  padding: 10px 0;
  margin: 0;
  color: white;
  font-weight: 100;
  @media (min-width: 776px) {
    display: block;
  }
`;

const Link = styled(NavLink)`
  display: block;
  padding: 10px 10px 5px 10px;
  margin-bottom: 5px;
  color: white !important;
  font-size: 20px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  font-weight: 100;
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid white;
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 776px) {
      display: none;
    }
  }
  @media (min-width: 776px) {
    font-size: 20px;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Container>
        <Logo>Metal Catalogue</Logo>
        <ul>
          <li>
            <Link to="">
              <span>👍</span>Newest
            </Link>
          </li>
          <li>
            <Link to="elo">
              <span>🤘</span>Channels
            </Link>
          </li>
          <li>
            <Link to="search">
              <span>🔍</span>Search
            </Link>
          </li>
          <li>
            <Link to="about">
              <span>📓</span>About
            </Link>
          </li>
        </ul>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
