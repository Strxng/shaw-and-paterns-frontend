import { Box, Typography } from '@mui/material';
import { UserCard } from './components/userCard';
import { getAllUsers } from 'services/userService';
import { useQuery } from 'react-query';

export const HomePage = (): JSX.Element => {
  const { data } = useQuery([], () => getAllUsers());

  const users = data?.users || [];
  const pagination = data?.pagination;

  return (
    <>
      <Typography color={'text.primary'} variant="h6">
        Users
      </Typography>

      <Box sx={{ mt: 3 }}>
        {/* <UserCard id={0} image="" name="Leozin" /> */}
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            image={user.avatar_url}
            login={user.login}
          />
        ))}
      </Box>
    </>
  );
};
