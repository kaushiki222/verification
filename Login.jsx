import React from "react";
import { useContext, useState } from "react";
import { RecoveryContext } from "../App";
import "./login.css";

export default function Login() {
  const { email, setOTP } = useContext(RecoveryContext);

  function navigateOtp() {
    if (email) {
      const OTP = Math.random(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
    }
  }
  const [mail, setMail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMail("");
  };

  return (
    <>
      <div className="content">
        <div className="form">
          <div className="header">
            <h1 className="title">Forgot your password?</h1>
            <div className="Emails">
              Please enter your Email address or phone number linked with your
              account
            </div>
          </div>
          <div className="sign-up">
            <form onSubmit={handleSubmit} className="Email">
              <label>
                <input
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required=""
                  placeholder="Email address or phone number"
                />
              </label>
              <button className="buttons" type="submit">
                send code{" "}
              </button>
            </form>
          </div>
          <div className="Login-in">
            <a href="#" onClick={() => navigateOtp()}></a>
            <div className="text">or</div>
            <div className="remember">
              <div className="password">Remember password? </div>
              <div className="Reset">Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
