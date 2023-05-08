import {
  Avatar,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

interface UserCardProps {
  id: number;
  login: string;
  image: string;
  onClick: () => void;
}

export const UserCard = ({
  id = 0,
  login = '',
  image = '',
  onClick = () => {},
}: UserCardProps): JSX.Element => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card sx={{ mb: 3, alignItems: 'center' }}>
        <CardContent>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Avatar sx={{ bgcolor: 'primary.light', color: 'text.primary' }}>
              {id.toString()}
            </Avatar>
            <Typography color={'text.primary'} sx={{ ml: 2, flexGrow: 1 }}>
              {login}
            </Typography>

            <Avatar alt="User Image" src={image} />
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};
