const Calculator = () => (
  <div className="calculatrice">
    <div className="display-screen">
      <div className="previous-operand" />
      <div className="current-operand">0</div>
    </div>
    <div className="all-buttons">

      <div className="buttons">

        <button type="button" className="delete delt">AC</button>
        <button type="button" className="delete clear">+/-</button>
        <button type="button" className="percentage">%</button>
        <button type="button" className="number seven">7</button>
        <button type="button" className="number eigth">8</button>
        <button type="button" className="number nine">9</button>
        <button type="button" className="number four">4</button>
        <button type="button" className="number five">5</button>
        <button type="button" className="number six">6</button>
        <button type="button" className="number one">1</button>
        <button type="button" className="number two">2</button>
        <button type="button" className="number three">3</button>
        <button type="button" className="number zero">0</button>
        <button type="button" className="number dot">.</button>
      </div>
      <div className="operations">
        <button type="button" className="ope divide">÷</button>
        <button type="button" className="ope por">x</button>
        <button type="button" className="ope minus">-</button>
        <button type="button" className="ope sum">+</button>
        <button type="button" className="equal">=</button>
      </div>

    </div>
  </div>
);
export default Calculator;
