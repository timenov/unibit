import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "./services/UserService";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await apiService.loginUser(username, password);
      if (!response) {
        throw new Error("Login failed");
      }
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;