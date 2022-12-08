import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid rgba(255,255,255,0.9);
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  display: inline-block;
  width: fit-content;
  padding: 4px 16px;
  border-radius: 99px;
  font-size: 16px;
  color: white;
  background: maroon;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: black;
  }
`;

export default Button;