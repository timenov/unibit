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
    if (username.length === 0) {
      setError("Username is mandatory.");
      return;
    }
    if (password.length === 0) {
      setError("Password is mandatory.");
      return;
    }

    apiService
      .loginUser(username, password)
      .then((response) => {
        if (!response) {
          throw new Error("Login failed");
        }

        localStorage.setItem("user", response.username);
        window.dispatchEvent(new Event('storage'))
        navigate("/admin");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className={"row g-3 needs-validation " + (error && "was-validated")}
        noValidate
      >
        <div className="col-md-6">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <div className="form-control-feedback text-danger">{error}</div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
