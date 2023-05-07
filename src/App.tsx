import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { DefaultPageStructure } from 'components/page/defaultPageStructure';
import { Navigation } from 'routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#795fcd',
    },
  },
});

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultPageStructure>
        <Navigation />
      </DefaultPageStructure>
    </ThemeProvider>
  );
};
