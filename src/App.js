import './App.css';
import Calculator from './components/Calculator';
import ApiCall from './components/ApiCalls';

function App() {
  return (
    <div className="calculator-holder">
      <Calculator />
      <ApiCall />
    </div>
  );
}

export default App;
