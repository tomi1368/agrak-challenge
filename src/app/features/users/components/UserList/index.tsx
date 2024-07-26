import { UserListContainer, UserItem, UserInfo, UserActions } from "./style";
import { UserDto } from "../../../../shared/types/user.interface";
import Button from "../../../../shared/components/Button";
import { FlexContainer } from "../../../../shared/styles/containers/style";
import { Avatar } from "../../../../shared/components/Avatar/style";

interface Props {
  users?: UserDto[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isLoading: (user: UserDto) => boolean;
}

const Component = ({ users, onEdit, onDelete, isLoading }: Props) => {
  return (
    <UserListContainer>
      {users?.map((user) => (
        <UserItem key={user.id}>
          <FlexContainer align="center" gap="10px">
            <Avatar src={user.avatar}></Avatar>
            <UserInfo>
              <span>
                {user.first_name} {user.second_name}
              </span>
              <span>{user.email}</span>
            </UserInfo>
          </FlexContainer>

          <UserActions>
            <Button
              options={{ size: "sm", skin: "primary", type: "filled" }}
              onClick={() => onEdit(user.id)}
            >
              Edit
            </Button>
            <Button
              options={{ size: "sm", skin: "danger", type: "filled" }}
              onClick={() => onDelete(user.id)}
              disabled={isLoading(user)}
            >
              Delete
            </Button>
          </UserActions>
        </UserItem>
      ))}
    </UserListContainer>
  );
};

export default Component;
