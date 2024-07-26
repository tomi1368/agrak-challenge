import React, { createRef, useState } from "react";
import { ErrorMessage } from "../../styles/global/style";
import {
  ClearInput,
  FieldContainer,
  Input,
  Label,
} from "../../styles/form/style";
import { FlexContainer } from "../../styles/containers/style";

interface Props {
  label: string;
  name: string;
  accept?: string;
  error?: string;
  marginbottom: number;
  clearFn: () => void;
  onBlur?: (data: any) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: any) => void;
  value: string | File; // Puede ser un archivo o una URL base64
}

const Component = ({
  label,
  marginbottom,
  error,
  onChange,
  name,
  value,
  setFieldValue,
  clearFn,
  ...rest
}: Props) => {
  const inputRef = createRef<HTMLInputElement>();
  const clearInput = () => {
    if (!!inputRef && !!inputRef?.current) {
      clearFn();
      inputRef.current.value! = "";
    }
  };
  const isFile = value instanceof File;
  return (
    <FlexContainer $align="flex-start" $direction="column">
      <Label>{label}</Label>
      <FieldContainer $marginbottom={marginbottom}>
        {!!isFile && (
          <ClearInput
            style={{ marginLeft: "10px" }}
            onClick={() => clearInput()}
          >
            X
          </ClearInput>
        )}
        <Input
          {...rest}
          name={name}
          ref={inputRef}
          type="file"
          onChange={(event) => {
            const files = event.currentTarget.files;
            if (files && files.length > 0) {
              setFieldValue(name, files[0]); // Almacena el archivo en Formik
            } else {
              clearFn(); // Si no hay archivo seleccionado, limpiamos el valor
            }
            onChange(event);
          }}
        />
      </FieldContainer>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </FlexContainer>
  );
};

export default Component;
