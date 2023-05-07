import { Avatar, Container, Paper, Typography } from '@mui/material';

interface UserCardProps {
  id: number;
  name: string;
  image: string;
}

export const UserCard = ({
  id = 0,
  name = '',
  image = '',
}: UserCardProps): JSX.Element => {
  return (
    <Paper
      variant="elevation"
      elevation={2}
      sx={{ p: 3, alignItems: 'center' }}
    >
      <Container
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Avatar sx={{ bgcolor: 'primary.light', color: 'text.primary' }}>
          {id.toString()}
        </Avatar>
        <Typography color={'text.primary'} sx={{ ml: 2, flexGrow: 1 }}>
          {name}
        </Typography>

        <Avatar alt="User Image" src={image} />
      </Container>
    </Paper>
  );
};
