import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { Navigation } from 'routes';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toast } from 'components/toast';

const theme = createTheme({
  palette: {
    primary: {
      main: '#795fcd',
      light: '#eaf0f6',
    },
    text: {
      primary: '#637192',
    },
  },
});

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Toast />
        <Navigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
