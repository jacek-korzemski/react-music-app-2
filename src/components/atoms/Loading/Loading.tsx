import styled from "styled-components";
import "./loading.css";

const LoadingWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
