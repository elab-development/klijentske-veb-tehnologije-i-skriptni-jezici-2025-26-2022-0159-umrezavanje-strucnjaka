import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import logo from "../assets/LOGO.png";
import "./Auth.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const initials = fullName
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .toUpperCase();

  function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    if (!fullName || !email || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const user = {
      fullName,
      username,
      email,
      password,
      connections:0,
      avatar:initials
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));
    localStorage.setItem("loggedUser", JSON.stringify(user));

    navigate("/dashboard");
  }

  return (
    <div className="auth-page">
      <div className="auth-logo">
        <img src={logo} alt="ExpertConnect" />
      </div>

      <div className="auth-card register-card">
        <h1>Create your account</h1>
        <p>Join ExpertConnect and start building your professional network</p>

        <form onSubmit={handleRegister} className="auth-form">
          <InputField
            label="Full name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={setFullName}
          />

          <InputField
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
          />

          <InputField
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={setUsername}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />

          <Button text="Sign Up" type="submit" />
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;