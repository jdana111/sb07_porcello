import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import { UserContext } from './UserContext';

function App() {
  const msg = useContext(UserContext);
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Home</h1>
      <div>{msg}</div>
    </div>
  );
}

export default App;
