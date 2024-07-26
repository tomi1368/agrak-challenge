import styled from "styled-components";

export const Button = styled.button`
  font-family: "Inter", sans-serif;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  text-align: center;
`;

export const ErrorMessage = styled.span`
  position: relative;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 22px;
`;
