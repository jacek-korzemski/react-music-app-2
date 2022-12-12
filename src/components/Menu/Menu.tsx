import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BaseContainer from "src/components/Container";
import Button from "src/components/Button";
import Modal from "src/components/Modal";
import useUi from "src/hooks/useUi";
import Login from "src/components/Login";

const MenuWrapper = styled.div`
  background: black;
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
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  @media (min-width: 776px) {
    position: relative;
    border-top: none;
    border-bottom: 1px solid white;
    background: transparent;
  }
`;

const Container = styled(BaseContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1333px;
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
  padding: 0 10px 7px 10px;
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
  const { setModal } = useUi();
  const signupHandler = () => {
    setModal(
      <Modal title={"Sign in"}>
        <Login />
      </Modal>
    );
  };

  return (
    <MenuWrapper>
      <Container>
        <Logo>Metal Catalogue</Logo>
        <ul>
          <li>
            <Link to="">Newest</Link>
          </li>
          <li>
            <Link to="channels">Channels</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
        <ul style={{ padding: "10px 0" }}>
          <li>
            <Button>
              <span>🔍</span>Search
            </Button>
          </li>
          <li>
            <Button onClick={signupHandler}>
              <span>🦆</span>Sign in
            </Button>
          </li>
        </ul>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
