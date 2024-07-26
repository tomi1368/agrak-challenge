import { FlexContainer } from "../../styles/containers/style";
import { Input, Label } from "../../styles/form/style";
import { ErrorMessage } from "../../styles/global/style";
import { FieldContainer } from "./style";

interface Props {
  value: string;
  name: string;
  label: string;
  error?: string;
  marginbottom: number;
  onBlur?: (data: any) => void;
  onChange?: (data: any) => void;
}

const Component = ({ error, marginbottom, label, ...rest }: Props) => {
  return (
    <FlexContainer direction="column" align="flex-start">
      <Label>{label}</Label>
      <FieldContainer marginbottom={marginbottom}>
        <Input {...rest} />
      </FieldContainer>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </FlexContainer>
  );
};

export default Component;
