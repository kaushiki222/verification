import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";

import "./App.css";
import Login from "./components/Login.jsx";
import OTPinput from "./components/OTPInput.jsx";
import Reset from "./components/Reset.jsx";

export const RecoveryContext = createContext();
function App() {
  const [mail, setEmail] = useState();
  const [otp, setOtp] = useState();

  return (
    <RecoveryContext.Provider value={{ mail, setEmail, otp, setOtp }}>
      <Router>
        <Routes>
          <Route path="/forget-password" element={<Login />} />
          <Route path="/forget-password/verify-otp" element={<OTPinput />} />
          <Route path="/forget-password/changePassword" element={<Reset />} />

          <Route></Route>
        </Routes>
      </Router>
    </RecoveryContext.Provider>
  );
}
export default App;
