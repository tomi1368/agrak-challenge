import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserDto } from "../../../shared/types/user.interface";
import { updateUser } from "../services/api";

export const useEditUser = ({ onSuccess }: { onSuccess?: Function }) => {
  const queryClient = useQueryClient();
  return useMutation<
    UserDto,
    Error,
    { id: string; userData: Partial<UserDto> }
  >({
    mutationFn: ({ id, userData }) => updateUser(id, userData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
      onSuccess && onSuccess();
    },
  });
};
