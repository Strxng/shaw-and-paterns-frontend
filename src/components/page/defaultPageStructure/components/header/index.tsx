import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <GitHubIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
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
