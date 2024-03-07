import React from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import "./Reset.css";

export default function Reset() {
  const { setPage } = useContext(RecoveryContext);
  function changePassword() {
    setPage("recovered");
  }
  return (
    <>
      <div className="password-reset-container ">
        <div className="Form">
          <div className="head">
            <h2>Change Password</h2>
          </div>
          <div className="Password">
            <div className="new">
              <label>New password</label>
              <input
                className="button"
                type="password"
                name="password"
                placeholder="Please enter password"
                required=""
              ></input>
            </div>
            <div className="confirm">
              <label>Confirm password</label>
              <input
                className="button"
                type="password"
                name="password"
                placeholder="Re-enter same password"
                required=""
              ></input>
            </div>
          </div>
          <div className="Remembers">
            <div className="Pass">
              <a>Term and Condition</a>
            </div>
            <div className="Reset">
              <button onClick={() => changePassword()}>Reset password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
