import { Outlet } from "react-router-dom";
import { Container } from "../../styles/containers/style";

const Component = () => {
  return (
    <Container>
      <Outlet></Outlet>
    </Container>
  );
};

export default Component;
