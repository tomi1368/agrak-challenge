import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

export const ClearInput = styled("button")`
  border: 0px;
  margin: 0px;
  padding: 0px;
  background: none;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0%, -50%);
  cursor: pointer;
`;
