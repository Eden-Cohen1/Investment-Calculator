import { useState } from "react";

const INIT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function UserInput({ onUserInput }) {
  const [inputData, setInputData] = useState({ ...INIT_DATA });

  const handleInputChange = function (event) {
    let field = event.target.getAttribute("data");
    setInputData((oldData) => {
      const newData = {
        ...oldData,
        [field]: Number(event.target.value),
      };
      console.log(newData);
      onUserInput(newData);
      return newData;
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={handleInputChange}
            value={inputData.initialInvestment}
            data="initialInvestment"
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={handleInputChange}
            value={inputData.annualInvestment}
            data="annualInvestment"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input
            onChange={handleInputChange}
            value={inputData.expectedReturn}
            data="expectedReturn"
          />
        </div>
        <div>
          <label>DURATION</label>
          <input
            onChange={handleInputChange}
            value={inputData.duration}
            data="duration"
          />
        </div>
      </div>
    </section>
  );
}
