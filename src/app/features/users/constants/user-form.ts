import * as Yup from "yup";

export const schema = Yup.object().shape({
  first_name: Yup.string().required("First name is required."),
  second_name: Yup.string().required("Second name is required."),
  email: Yup.string().email("Not valid email").required("Email is required"),
  avatar: Yup.mixed().required("Avatar is requred"),
});

export interface FormValues {
  first_name: string;
  second_name: string;
  email: string;
  avatar: string | File;
}

export const initialValues: FormValues = {
  first_name: "",
  second_name: "",
  email: "",
  avatar: "",
};
