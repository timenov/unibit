import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  
  useEffect(() => {
    setUser(localStorage.getItem("user"));
    window.addEventListener("storage", storageEventHandler, false);
  });

  function storageEventHandler() {
    setUser(localStorage.getItem("user") || null);
    console.log("Storage event triggered, user state updated: ", localStorage.getItem("user"));
    window.removeEventListener("storage", storageEventHandler, false);
  }

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
          {!user ? (
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          ) : (
            <Link className="nav-item nav-link" to="/logout">
              Logout
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
