import { Box, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface UserDetailCardProps {
  isLoading: boolean;
  image: string;
  name: string;
  username: string;
  bio: string;
  profileLink: string;
  createdAt: string;
}

export const UserDetailCard = ({
  bio,
  createdAt,
  image,
  isLoading,
  name,
  profileLink,
  username,
}: UserDetailCardProps): JSX.Element => {
  if (isLoading) {
    return <Skeleton height={500} width={350} />;
  }

  return (
    <Card sx={{ width: 350 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Box
            component={'img'}
            src={image}
            sx={{ width: 300, borderRadius: '50%', mb: 3 }}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" fontWeight={500} color="text.primary">
            {name}
          </Typography>
          <Typography color="text.secondary">{username}</Typography>
          <Typography color="text.secondary">{bio}</Typography>
          <Typography
            color="text.secondary"
            onClick={() => window.open(profileLink, '__blank')}
            sx={{ cursor: 'pointer' }}
          >
            {profileLink}
          </Typography>
          {Boolean(createdAt) && (
            <Typography color="text.secondary" variant="caption">
              Joined at {format(new Date(createdAt || ''), 'MM/dd/yyyy')}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
