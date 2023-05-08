import { Box, Typography, Button } from '@mui/material';
import { UserCard } from './components/userCard';
import { getAllUsers, getAllUsersWithPagination } from 'services/userService';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const HomePage = (): JSX.Element => {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const { data, refetch, isFetching, isLoading } = useQuery(
    ['users', url],
    () => (url ? getAllUsersWithPagination(url) : getAllUsers()),
  );

  const users = data?.users || [];
  const pagination = data?.pagination;

  const renderUsers = (): JSX.Element => {
    if (isFetching || isLoading) {
      return (
        <Skeleton
          count={10}
          height={80}
          inline={true}
          borderRadius={10}
          style={{ marginBottom: 30, marginTop: 30 }}
        />
      );
    }

    return (
      <Box sx={{ mt: 3 }}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            image={user.avatar_url}
            login={user.login}
            onClick={() => navigate(user.login)}
          />
        ))}
      </Box>
    );
  };

  return (
    <>
      <Typography color={'text.primary'} variant="h6">
        Users
      </Typography>

      {renderUsers()}

      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            onClick={() => {
              setUrl(pagination?.prevPage);
              refetch();
            }}
          >
            Previous page
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            setUrl(pagination?.nextPage);
            refetch();
          }}
        >
          Next page
        </Button>
      </Box>
    </>
  );
};
