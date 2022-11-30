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
  max-height: calc(100vh - 50px);
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
`;

const Layout = () => {
  return (
    <App>
      <Menu />
      <Content>
        <Outlet />
      </Content>
    </App>
  );
};

export default Layout;
