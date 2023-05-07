import { Box, Typography } from '@mui/material';
import { UserCard } from './components/userCard';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Typography color={'text.primary'} variant="h6">
        Users
      </Typography>

      <Box sx={{ mt: 3 }}>
        <UserCard id={0} image="" name="Leozin" />
      </Box>
    </>
  );
};
