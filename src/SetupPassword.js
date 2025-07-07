import { useState } from "react";
import "./App.css";

function SetupPassword() {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    if (password === rePassword) {
      setError("");
      window.location.href = "/?referrer=setup_password";
    } else {
      setError("Passwords do not match");
    }
  };

  if (step === 1) {
    return (
      <div className="center-box">
        <h2>Activate Account</h2>

        <p>
          By registering, you agree to the Collection Notice and Privacy Policy.
          You agree to receive messages about your job ads and other updates
          about SEEK products. You can unsubscribe at any time.
        </p>

        <button
          onClick={() => {
            setStep(2);
          }}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <form className="center-box" onSubmit={handleSubmitPassword}>
      <h2>Set your password</h2>

      <p>Enter a new password</p>

      <div>
        <input
          type="password"
          placeholder="New password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Re-enter new password*"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
      </div>

      {error ? <div className="error">{error}</div> : null}

      <button type="submit">Set password</button>
    </form>
  );
}

export default SetupPassword;
