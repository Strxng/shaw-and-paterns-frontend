import { get } from 'providers/http';

interface Pagination {
  nextPage: string;
  prevPage: string;
}

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface GetAllUsersResponse {
  users: User[];
  pagination: Pagination;
}

export const getAllUsers = async (): Promise<GetAllUsersResponse> => {
  const data = await get<GetAllUsersResponse>(
    'http://localhost:3000/api/users',
  );
  return data;
};
