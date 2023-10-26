import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from "./pages/WelcomePage";
import { CurrentQuestionZustand } from './components/CurrentQuestionZustand';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<CurrentQuestionZustand />} />
      </Routes>
    </BrowserRouter>
  );
};
