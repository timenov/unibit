import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "./services/UserService";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      setError("Username is mandatory.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    apiService
      .registerUser(username, password)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        className={"row g-3 needs-validation " + (error && "was-validated")}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="col-md-6">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
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
          <label htmlFor="password" className="form-label">
            Password:
          </label>
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
        <div className="col-md-6">
          <label htmlFor="repeatPassword" className="form-label">
            Repeat Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <div className="form-control-feedback text-danger">{error}</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
