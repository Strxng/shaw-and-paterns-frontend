import { DefaultPageStructure } from 'components/page/defaultPageStructure';
import { HomePage } from 'pages/home';
import { UserDetails } from 'pages/userDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <DefaultPageStructure>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path=":username" element={<UserDetails />} />
          </Route>
        </Routes>
      </DefaultPageStructure>
    </BrowserRouter>
  );
};
