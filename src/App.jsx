import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

const INIT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentResult, setInvestmentResult] = useState([]);
  const handleUserInput = function (userInput) {
    setInvestmentResult((oldRes) => {
      const result = calculateInvestmentResults(userInput);
      return result;
    });
  };
  return (
    <main>
      <Header />
      <UserInput onUserInput={handleUserInput} />
      <Result investmentResult={investmentResult} />
    </main>
  );
}

export default App;
