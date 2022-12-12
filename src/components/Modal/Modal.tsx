import { ReactNode } from "react";
import styled from "styled-components";
import useUi from "src/hooks/useUi";

const ModalWrapper = styled.div`
  background: white;
  box-shadow: 1px 2px 3px black;
  max-width: calc(100% - 30px);
  min-width: 300px;
  min-height: 300px;
  max-height: calc(100vh - 30px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    position: relative;
    padding-right: 32px;
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    button {
      background: transparent;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 24px;
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Modal = ({ title, children }: { title: string; children: ReactNode }) => {
  const { closeModal } = useUi();

  return (
    <ModalWrapper>
      <h2>
        {title} <button onClick={closeModal}>❌</button>
      </h2>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
