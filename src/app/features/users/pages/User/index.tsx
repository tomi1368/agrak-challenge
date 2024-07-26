import { useParams } from "react-router-dom";
import UserForm from "../../components/UserForm";
import { useUser } from "../../hooks/useUser";
import Loader from "../../../../shared/components/Loader";
import { Title } from "../../../../shared/components/Title/style";

const Component = () => {
  const { id } = useParams();
  const { data: user, error, isLoading } = useUser(id);
  if (error) return <Title>Error to found user</Title>;
  return (
    <div>
      <Title>{id ? `Editar Usuario` : `Crear Usuario`} </Title>
      {isLoading ? <Loader></Loader> : <UserForm user={user}></UserForm>}
    </div>
  );
};

export default Component;
