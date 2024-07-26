import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserActions = styled.div`
  display: flex;
  gap: 10px;
`;
