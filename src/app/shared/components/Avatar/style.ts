import styled from "styled-components";

export const Avatar = styled.div<{ $src: string }>`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${(props) => props.$src});
  background-position: center center;
  background-size: cover;
`;
