import { Formik } from "formik";
import { Form } from "../../../../shared/styles/form/style";
import { schema, initialValues, FormValues } from "../../constants/user-form";
import FileInput from "../../../../shared/components/FileInput";
import Input from "../../../../shared/components/Input";
import { UserDto } from "../../../../shared/types/user.interface";
import { useState } from "react";
import { useEditUser } from "../../hooks/useEditUser";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { uploadToCloudinary } from "../../../../shared/services/cloudinary";
import Button from "../../../../shared/components/Button";
import GoHomeButton from "../GoHomeButton";
import { Avatar } from "../../../../shared/components/Avatar/style";
const Component = ({ user }: { user?: UserDto }) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    user?.avatar || null
  );
  const navigate = useNavigate();
  const { mutateAsync: deleteMutate, isPending: deleteIsLoading } =
    useDeleteUser({
      onSuccess: () => {
        navigate("/");
      },
    });
  const { mutateAsync: editUserMutate, isPending: editIsLoading } = useEditUser(
    {
      onSuccess: () => {
        navigate("/");
      },
    }
  );
  const { mutateAsync: createUserMutate, isPending: createIsLoading } =
    useCreateUser({
      onSuccess: () => {
        navigate("/");
      },
    });
  const onSubmit = async (values: FormValues) => {
    const { avatar, ...rest } = values;
    let stringAvatar: string = "";
    if (values.avatar instanceof File) {
      stringAvatar = await uploadToCloudinary(values.avatar);
    }
    if (user) {
      await editUserMutate({
        id: user?.id,
        userData: {
          ...rest,
          ...(values.avatar instanceof File && { avatar: stringAvatar }),
        },
      });
    } else {
      await createUserMutate({
        ...values,
        avatar: stringAvatar,
      });
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null;
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setAvatarPreview(null);
    }
  };

  const isLoading = deleteIsLoading || editIsLoading || createIsLoading;
  return (
    <div>
      <GoHomeButton></GoHomeButton>
      <Formik
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={schema}
        initialValues={
          user
            ? {
                first_name: user.first_name,
                second_name: user.second_name,
                email: user.email,
                avatar: user.avatar,
              }
            : initialValues
        }
      >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} id="user-form">
            <Input
              label="First Name"
              value={values["first_name"]}
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors["first_name"]}
              marginbottom={10}
            />
            <Input
              label="Second Name"
              value={values["second_name"]}
              name="second_name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors["second_name"]}
              marginbottom={10}
            />
            <Input
              label="Email"
              value={values["email"]}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors["email"]}
              marginbottom={10}
            />
            {avatarPreview && <Avatar $src={avatarPreview}></Avatar>}

            <FileInput
              label="Avatar"
              name="avatar"
              value={values["avatar"]}
              accept="image/*"
              error={errors["avatar"]}
              marginbottom={10}
              setFieldValue={(field, value) => {
                setFieldValue(field, value);
              }}
              clearFn={() => {
                setFieldValue("avatar", "");
                setAvatarPreview(null);
              }}
              onChange={handleAvatarChange}
              onBlur={handleBlur}
            ></FileInput>
            <Button
              $options={{
                type: "filled",
                skin: "gray",
                size: "lg",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button
              $options={{
                type: "filled",
                skin: "primary",
                size: "lg",
              }}
              disabled={isLoading}
              type="submit"
            >
              {user ? "Edit" : "Create"}
            </Button>
            {user && (
              <Button
                $options={{
                  type: "filled",
                  skin: "danger",
                  size: "lg",
                }}
                disabled={isLoading}
                onClick={() => {
                  deleteMutate(user.id);
                }}
              >
                Delete
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Component;
