import { Header } from './components/header';

interface DefaultPageStructureProps {
  children: JSX.Element;
}

export const DefaultPageStructure = ({
  children,
}: DefaultPageStructureProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
