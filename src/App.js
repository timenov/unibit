import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {

  return (
    <div>
      <NavBar />
      <main className="container"><Outlet /></main>
      <footer className="footer bg-light text-center py-3">
        <p>&copy; 2026 My React App by Nikolay Dimitrov, 177knz</p>
      </footer>
    </div>
  );
}

export default App;
