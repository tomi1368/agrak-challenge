import React from "react";
import { FlexContainer } from "../../../../shared/styles/containers/style";
import { Button } from "../../../../shared/components/Button/style";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();
  return (
    <FlexContainer justify="flex-start">
      <Button
        options={{
          size: "sm",
          skin: "primary",
          type: "filled",
          marginbottom: "10px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >{`<--- Go Home`}</Button>
    </FlexContainer>
  );
};

export default Component;
