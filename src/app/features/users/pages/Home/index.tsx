import { useNavigate } from "react-router-dom";
import UserList from "../../components/UserList";
import { useUsers } from "../../hooks/useUsers";
import Loader from "../../../../shared/components/Loader";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { FlexContainer } from "../../../../shared/styles/containers/style";
import { Title } from "../../../../shared/components/Title/style";
import Button from "../../../../shared/components/Button";
import { useState } from "react";

const Component = () => {
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const { data: users, isLoading, error: getUsersError } = useUsers();
  const navigate = useNavigate();
  const deleteUserMutation = useDeleteUser({
    onSuccess: () => {
      setDeletingUserId(null);
    },
  });

  const handleEdit = (userId: string) => {
    navigate(`/user/${userId}`);
  };

  const handleAddUser = () => {
    navigate("/user");
  };

  const handleDelete = async (userId: string) => {
    setDeletingUserId(userId);
    await deleteUserMutation.mutateAsync(userId);
  };

  if (getUsersError) return <Title>Error loading users</Title>;
  return (
    <div>
      <Title>User List</Title>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FlexContainer $justify="center" style={{ marginBottom: "10px" }}>
            <Button
              $options={{ size: "md", skin: "gray", type: "filled" }}
              onClick={handleAddUser}
            >
              Create User
            </Button>
          </FlexContainer>
          <UserList
            isLoading={(user) =>
              deleteUserMutation.status === "pending" &&
              user.id === deletingUserId
            }
            onDelete={handleDelete}
            onEdit={handleEdit}
            users={users}
          ></UserList>
        </>
      )}
    </div>
  );
};

export default Component;
