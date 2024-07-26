import { Button } from "./style";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: any;
  disabled?: boolean;
  onClick?: (ev: any) => void;
  options: {
    size: "sm" | "md" | "lg";
    type: "filled";
    skin: "primary" | "gray" | "danger";
    marginbottom?: string;
  };
}

const Component = ({ children, type = "button", ...rest }: ButtonProps) => {
  return (
    <Button {...rest} type={type}>
      {children}
    </Button>
  );
};

export default Component;
