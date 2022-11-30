import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Menu from "src/components/molecules/Menu";
import bg from "src/assets/bg.png";

const App = styled.div`
  width: 100%;
  height: 100vh;
  background: url("${bg}");
  background-position: center;
`;

const Content = styled.div`
  top: 0;
  left: 0;
  padding: 20px;
  margin-right: 10px;
  margin-left: 10px;
  max-height: calc(100vh - 67px);
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    margin: 10px 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (min-width: 776px) {
    max-height: calc(100vh - 50px);
  }
`;

const AlternativeLogo = styled.h1`
  display: block;
  font-size: 24px;
  padding: 10px 0;
  margin: 0;
  color: white;
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
  @media (min-width: 776px) {
    display: none;
  }
`;

const Footer = styled.div`
  font-size: 14px;
  font-weight: 100;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  margin: 20px 0 -20px 0;
  color: white;
`;

const Layout = () => {
  return (
    <App>
      <Menu />
      <Content>
        <AlternativeLogo>Metal Catalogue</AlternativeLogo>
        <Outlet />
        <Footer>Copyright &copy; Angry Maya Jacek Korzemski 2022</Footer>
      </Content>
    </App>
  );
};

export default Layout;
