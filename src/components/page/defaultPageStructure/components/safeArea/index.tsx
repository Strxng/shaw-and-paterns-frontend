import { Container } from '@mui/material';

interface SafeAreaProps {
  children: JSX.Element;
}

export const SafeArea = ({ children }: SafeAreaProps): JSX.Element => {
  return <Container sx={{ my: 4, px: 2 }}>{children}</Container>;
};
