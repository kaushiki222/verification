import React, { useContext, useState } from "react";
import { RecoveryContext } from "../App";
import "./OTPInput.css";
export default function OTPinput() {
  const { email, otp } = useContext(RecoveryContext);
  const [OTPinput, SetOTPinput] = useState([0, 0, 0, 0]);

  function ResendOTP() {}

  function verifyOTP() {}

  return (
    <>
      <div className="contents">
        <div className="forms">
          <div>
            <p className="verification"> Verification</p>
            <div>
              <p className="Enter-code">
                Enter the verification code we just sent on your email address
                {email}
              </p>
              <div className="otp-input">
                <input
                  type="text"
                  maxlength="1"
                  pattern="[0-9]"
                  required=""
                  onChange={(e) =>
                    SetOTPinput([
                      e.target.value,
                      OTPinput[1],
                      OTPinput[2],
                      OTPinput[3],
                    ])
                  }
                ></input>
                <input
                  type="text"
                  maxlength="1"
                  pattern="[0-9]"
                  required=""
                  onChange={(e) =>
                    SetOTPinput([
                      OTPinput[0],
                      e.target.value,
                      OTPinput[2],
                      OTPinput[3],
                    ])
                  }
                ></input>
                <input
                  type="text"
                  maxlength="1"
                  pattern="[0-9]"
                  required=""
                  onChange={(e) =>
                    SetOTPinput([
                      OTPinput[0],
                      OTPinput[1],
                      e.target.value,
                      OTPinput[3],
                    ])
                  }
                ></input>
                <input
                  type="text"
                  maxlength="1"
                  pattern="[0-9]"
                  required=""
                  onChange={(e) =>
                    SetOTPinput([
                      OTPinput[0],
                      OTPinput[1],
                      OTPinput[2],
                      e.target.value,
                    ])
                  }
                ></input>
              </div>
            </div>
            <div>
              <button
                className="codes"
                type="submit"
                onClick={() => verifyOTP()}
              >
                verify{" "}
              </button>
            </div>
            <div className="remembers">
              <div className="password">Didn't receive code? </div>
              <div className="Reset">Resend</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
