import { apiInstance } from "../../../shared/services/api";
import { UserDto } from "../../../shared/types/user.interface";

export const getUsers = async (): Promise<UserDto[]> => {
  const response = await apiInstance.get<UserDto[]>("/users");
  return response.data;
};

export const getUser = async (id?: string): Promise<UserDto> => {
  if (!id) throw new Error("User not found");
  const response = await apiInstance.get<UserDto>(`/users/${id}`);
  return response.data;
};

export const deleteUser = async (id: string): Promise<UserDto> => {
  const response = await apiInstance.delete(`/users/${id}`);
  return response.data;
};

export const updateUser = async (
  id: string,
  userData: Partial<UserDto>
): Promise<UserDto> => {
  const response = await apiInstance.put(`/users/${id}`, userData);
  return response.data;
};

export const createUser = async (
  userData: Omit<UserDto, "id" | "createdAt">
): Promise<UserDto> => {
  const response = await apiInstance.post(`/users`, userData);
  return response.data;
};
