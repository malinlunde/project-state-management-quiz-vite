import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from "./components/WelcomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
