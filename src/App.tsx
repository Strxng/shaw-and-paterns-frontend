import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { Navigation } from 'routes';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toast } from 'components/toast';
import { BrowserRouter } from 'react-router-dom';
import { DefaultPageStructure } from 'components/page/defaultPageStructure';
import { notifyError } from 'utils/toast';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (err: unknown) => notifyError((err as Error).message),
    },
  },
});

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DefaultPageStructure>
            <>
              <Toast />
              <Navigation />
            </>
          </DefaultPageStructure>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
