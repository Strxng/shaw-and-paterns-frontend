import { HomePage } from 'pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
