import styled from "styled-components";

export const FieldContainer = styled.div<{ marginbottom: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.marginbottom}px;
  width: 100%;
  min-height: 20px;
  border-radius: 10px;
`;
