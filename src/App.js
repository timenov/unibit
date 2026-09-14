import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Link to="/register">Register</Link></div>
      <div><Link to="/login">Login</Link></div>
    </div>
  );
}

export default App;
