import { useState } from "react";
import { useSearchParams } from "react-router";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "12345679") {
      setError("");
      setStatus("2fa-required");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();

    if (otp === "777999") {
      setError("");
      setStatus("completed");
    } else {
      setError("Invalid OTP code");
    }
  };

  if (status === "completed") {
    return (
      <div>
        <h1>Login successfully!</h1>
      </div>
    );
  }

  if (status === "2fa-required") {
    return (
      <form className="login-form" onSubmit={handleSubmitOtp}>
        <h1>Verify your identity</h1>

        <div>
          <label>We sent a 6-digits code to:</label>

          <input
            type="text"
            disabled
            value="+XXXXXX1150"
            onChange={(e) => {}}
          />
        </div>

        <div>
          <input
            id="password"
            placeholder="Enter the 6-digits code"
            type="password"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {error ? <div className="error">{error}</div> : null}

        <button type="submit">Continue</button>
      </form>
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmitLogin}>
      {searchParams.get("referrer") === "setup_password" ? (
        <div className="success">
          Your account has been activated. You may now sign in.
        </div>
      ) : null}

      <h1>Sign in</h1>

      <div>
        <label htmlFor="email-address">Email address</label>

        <input
          id="email-address"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error ? <div className="error">{error}</div> : null}

      <button type="submit">Sign in</button>
    </form>
  );
}

export default App;
