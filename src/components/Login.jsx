import React from "react";
import { signInWithGoogle } from "../firebaseConfig";
import "../index.css";

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) setUser(user);
  };

  return (
    <div className="login-container">
      <h2>Login to Dashboard</h2>
      <button className="google-login-btn" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
