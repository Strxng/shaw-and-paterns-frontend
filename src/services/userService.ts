import { get } from 'providers/http';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
}

interface Pagination {
  nextPage: string;
  prevPage: string;
}

interface User {
  id: number;
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
}

interface GetAllUsersResponse {
  users: User[];
  pagination: Pagination;
}

export const getAllUsers = async (
  url?: string,
): Promise<GetAllUsersResponse> => {
  return get<GetAllUsersResponse>(
    url ? url : `${process.env.REACT_APP_API_URL}/users`,
  );
};

export const getUserDetails = async (username: string): Promise<User> => {
  return get<User>(
    `${process.env.REACT_APP_API_URL}/users/${username}/details`,
  );
};

export const getUserRepos = async (username: string): Promise<Repo[]> => {
  return get<Repo[]>(
    `${process.env.REACT_APP_API_URL}/users/${username}/repos`,
  );
};
