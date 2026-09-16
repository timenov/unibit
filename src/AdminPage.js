import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!username) {
      console.log("User not logged in, redirecting to login page");
      navigate("/login");
    }
  }, [username, navigate]);

  return <h1>Welcome to the Admin Page, user: {username}!</h1>;
}

export default AdminPage;