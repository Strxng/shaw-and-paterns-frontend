import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';

export const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <GitHubIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 2, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Github Users
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              window.open('https://shawandpartners.com/', '_blank');
            }}
          >
            Shaw and Paterns
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
