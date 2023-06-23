import styled from "styled-components";

const TextInput = styled.input`
  &[type="text"],
  &[type="password"] {
    display: block;
    padding: 10px 15px;
    border-radius: 99px;
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export default TextInput;
