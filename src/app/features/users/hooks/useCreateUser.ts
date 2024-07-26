import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/api";
import { UserDto } from "../../../shared/types/user.interface";
import { useNavigate } from "react-router-dom";

export const useCreateUser = ({ onSuccess }: { onSuccess?: Function }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<UserDto, Error, Omit<UserDto, "id" | "createdAt">>({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/");
    },
  });
};
