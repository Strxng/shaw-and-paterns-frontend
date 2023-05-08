import { HomePage } from 'pages/home';
import { UserDetails } from 'pages/userDetails';
import { Routes, Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path=":username" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};
