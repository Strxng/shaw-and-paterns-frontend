import { Header } from './components/header';
import { SafeArea } from './components/safeArea';

interface DefaultPageStructureProps {
  children: JSX.Element;
}

export const DefaultPageStructure = ({
  children,
}: DefaultPageStructureProps): JSX.Element => {
  return (
    <>
      <Header />
      <SafeArea>{children}</SafeArea>
    </>
  );
};
