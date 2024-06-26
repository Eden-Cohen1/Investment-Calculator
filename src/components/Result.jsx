import { calculateInvestmentResults } from "../util/investment";

function currencyFormat(num) {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default function Result({ inputData }) {
  const investmentResult = calculateInvestmentResults(inputData);

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResult.map((res) => {
            return (
              <tr key={res.year}>
                <td>{res.year}</td>
                <td>
                  {res.valueEndOfYear && currencyFormat(res.valueEndOfYear)}
                </td>
                <td>{res.interest && currencyFormat(res.interest)}</td>
                <td>
                  {res.totalInterest && currencyFormat(res.totalInterest)}
                </td>
                <td>
                  {res.valueEndOfYear - res.totalInterest &&
                    currencyFormat(res.valueEndOfYear - res.totalInterest)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
