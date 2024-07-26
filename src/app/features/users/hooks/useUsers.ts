import { useQuery } from "@tanstack/react-query";
import { UserDto } from "../../../shared/types/user.interface";
import { getUsers } from "../services/api";

export const useUsers = () => {
  return useQuery<UserDto[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
