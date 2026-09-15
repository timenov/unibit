import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="container">
          <div className="navbar-brand">My App</div>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          </div>
        </nav>
      </header>
  );
}

export default NavBar;
