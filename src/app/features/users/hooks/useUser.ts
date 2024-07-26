import { useQuery } from "@tanstack/react-query";
import { UserDto } from "../../../shared/types/user.interface";
import { getUser } from "../services/api";

export const useUser = (id?: string) => {
  return useQuery<UserDto, Error>({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
