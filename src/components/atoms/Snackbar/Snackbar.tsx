import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Snackbar as SnackbarType } from "src/types/Ui";

const ProgressBarAnimation = keyframes`
  from { width: 0% }
  to { width: 100% }
`;

const SnackbarWrapper = styled.div<{
  type: string;
}>`
  padding: 15px;
  text-align: center;
  background: ${({ type }) => {
    if (type === "warning") {
      return "orange";
    }
    if (type === "error") {
      return "red";
    }
    if (type === "success") {
      return "green";
    }
    return "blue";
  }};
  color: white;
  border: 1px solid white;
  box-shadow: 1px 2px 3px black;
  position: relative;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  background: white;
  animation-name: ${ProgressBarAnimation};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: forwards;
`;

const Snackbar = ({ type, message, closeHandler }: SnackbarType) => {
  useEffect(() => {
    setTimeout(() => {
      closeHandler();
    }, 5000);
  }, []);
  return (
    <SnackbarWrapper type={type}>
      {message}
      <ProgressBar />
    </SnackbarWrapper>
  );
};

export default Snackbar;
