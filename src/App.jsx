import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

const INIT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputData, setInputData] = useState({ ...INIT_DATA });

  const isValid = inputData.duration >= 1;

  const handleUserInput = function (userInput, field) {
    setInputData((oldData) => {
      const newData = {
        ...oldData,
        [field]: Number(userInput),
      };
      return newData;
    });
  };

  return (
    <main>
      <Header />
      <UserInput onUserInput={handleUserInput} inputData={inputData} />
      {isValid && <Result inputData={inputData} />}
    </main>
  );
}

export default App;
