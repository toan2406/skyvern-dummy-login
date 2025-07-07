import { useState } from "react";
import "./App.css";

const SetupTOTP = () => {
  const [step, setStep] = useState(1);
  const [secretType, setSecretType] = useState("qr");
  const [TOTPCode, setTOTPCode] = useState("");

  if (step === 1) {
    return (
      <div className="center-box">
        <p>Secure your account by setting up multi-factor authentication</p>

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

  if (step === 2) {
    return (
      <div className="center-box">
        <h2>Keep Your Account Safe</h2>

        <p>Add another authentication method.</p>

        <p>
          <button
            onClick={() => {
              setStep(3);
            }}
          >
            Google Authenticator or similar
          </button>
        </p>

        <button>SMS</button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="center-box">
        <h2>Secure Your Account</h2>

        <p>
          Scan the QR Code below using your preferred authenticator app and then
          enter the provided one-time code below.
        </p>

        {secretType === "qr" ? (
          <img alt="totp_secret_qr" src="/totp_secret_qr.gif" />
        ) : (
          <code>NFCGGOB2KFKC6OJ4JNTSGQTBPE4HCRJ7</code>
        )}

        <p>
          {secretType === "qr" ? (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSecretType("text");
              }}
            >
              Trouble Scanning?
            </a>
          ) : (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSecretType("qr");
              }}
            >
              Scan QR code instead
            </a>
          )}
        </p>

        <input
          type="text"
          placeholder="Enter your one-time code*"
          value={TOTPCode}
          onChange={(e) => {
            setTOTPCode(e.target.value);
          }}
        />

        <button
          disabled={!TOTPCode}
          onClick={() => {
            setStep(4);
          }}
        >
          Continue
        </button>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div>
        <h1>Your input code: {TOTPCode}</h1>
      </div>
    );
  }

  return null;
};

export default SetupTOTP;
