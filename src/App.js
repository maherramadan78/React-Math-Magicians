import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/routes/Home';
import CalculatorPage from './components/routes/CalculatorPage';
import Quote from './components/routes/Quote';
import NotMatch from './components/routes/NotMatch';
import './components/styles/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Calculator" element={<CalculatorPage />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
