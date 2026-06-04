import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import "./Auth.css";
import logo from "../assets/LOGO.png";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      alert("User not found");
      return;
    }

    const registeredUser = JSON.parse(savedUser);

    if (
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(registeredUser)
      );

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-logo">
        <img src={logo} alt="ExpertConnect" />
      </div>

      <div className="auth-card">
        <h1>Welcome back!</h1>
        <p>Connect with professionals worldwide</p>
        <form onSubmit={handleLogin} className="auth-form">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={setEmail}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />

          <Button text="Sign In" type="submit" />
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;