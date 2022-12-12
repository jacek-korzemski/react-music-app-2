import { useState } from "react";
import Button from "src/components/Button";
import styled from "styled-components";

const WarningWrapper = styled.div`
  max-height: 80vh;
  width: 100%;
  max-width: 300px;
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

  h1 {
    color: red;
    margin: 15px 0 15px 0;
    padding: 0;
    border-bottom: 1px solid red;
  }
`;

const Warning = () => {
  return (
    <WarningWrapper>
      <h1>Warning!</h1>
      <p>
        This is just a portfolio app. I cannot guarantee that your email used to
        register/login won't leak out. Please, use your least used e-mail, or
        even 5-minute-mail service. Don't use any of your already used
        passwords. Remember - this is just a hobby project. You are using it at
        your own risk!
      </p>
    </WarningWrapper>
  );
};

const Login = () => {
  const [iKnowWhatIAmDoing, setIKnowWhatIAmDoing] = useState(false);

  return (
    <>
      {!iKnowWhatIAmDoing && (
        <>
          <Warning />
          <Button
            onClick={() => {
              setIKnowWhatIAmDoing(true);
            }}
          >
            Ok, I understand, I know what I am doing 😎
          </Button>
        </>
      )}
      {iKnowWhatIAmDoing && <>Login form here</>}
    </>
  );
};

export default Login;
