import { ReactNode } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 1px 0 0 0;
`;

const Checkbox = ({
  value,
  description,
  onClick,
}: {
  value: boolean;
  description: string | ReactNode;
  onClick(): any;
}) => {
  return (
    <CheckboxWrapper>
      <Box onClick={onClick}>{value ? "✔" : ""}</Box>
      <Description>{description}</Description>
    </CheckboxWrapper>
  );
};

export default Checkbox;
