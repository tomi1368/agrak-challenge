import styled from "styled-components";

interface FlexContainerProps {
  $align?: string;
  $justify?: string;
  $direction?: string;
  $wrap?: string;
  $gap?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: ${(props) => (!!props.$align ? props.$align : "stretch")};
  justify-content: ${(props) =>
    !!props.$justify ? props.$justify : "stretch"};
  flex-direction: ${(props) => (!!props.$direction ? props.$direction : "row")};
  flex-wrap: ${(props) => (!!props.$wrap ? props.$wrap : "nowrap")};
  gap: ${(props) => props.$gap};
  width: 100%;
`;

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1444px;
  margin: 0 auto;
`;
