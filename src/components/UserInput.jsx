export default function UserInput({ onUserInput, inputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={(event) =>
              onUserInput(event.target.value, "initialInvestment")
            }
            value={inputData.initialInvestment}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={(event) =>
              onUserInput(event.target.value, "annualInvestment")
            }
            value={inputData.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            onChange={(event) =>
              onUserInput(event.target.value, "expectedReturn")
            }
            value={inputData.expectedReturn}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            onChange={(event) => onUserInput(event.target.value, "duration")}
            value={inputData.duration}
          />
        </p>
      </div>
    </section>
  );
}
