import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/api";
import { UserDto } from "../../../shared/types/user.interface";

export const useDeleteUser = ({ onSuccess }: { onSuccess?: Function }) => {
  const queryClient = useQueryClient();

  return useMutation<UserDto, Error, string>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onSuccess && onSuccess();
    },
  });
};
