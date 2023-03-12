import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
}

export default App;
