import styled from "styled-components";
import useUi from "src/hooks/useUi";
import Snackbar from "src/components/Snackbar";
import React from "react";

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 99998;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
`;

const SnackbarWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ExtraUi = () => {
  const { snackbars, modal } = useUi();

  return (
    <>
      {modal && <ModalWrapper>{modal}</ModalWrapper>}
      {snackbars && snackbars.length > 0 && (
        <SnackbarWrapper>
          {snackbars.map(({ type, id, closeHandler, message }) => (
            <React.Fragment key={id}>
              <Snackbar
                type={type}
                id={id}
                message={message}
                closeHandler={closeHandler}
              />
            </React.Fragment>
          ))}
        </SnackbarWrapper>
      )}
    </>
  );
};

export default ExtraUi;
