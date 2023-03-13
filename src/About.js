import { Link } from "react-router-dom";
import { useContext } from 'react';
import "./App.css";
import { UserContext } from "./UserContext";

const About = () => {
  const msg = useContext(UserContext);
  return (
  <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <h1>About</h1>
    <div>{msg}</div>
  </div>
);
  }

export default About;
