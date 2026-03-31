import {Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png"

export default function Navbar() {

  return (

    <div className="navbar">
      <img className="logo" src={Logo} />
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/games"> Selection </Link>
        <Link to="/games/easy"> Easy Game </Link>
        <Link to="/games/normal"> Normal Game </Link>
        <Link to="/scores"> High Scores </Link>
        <Link to="/rules"> Rules </Link>
        <Link to="/login"> Log In </Link>
        <Link to="/register"> Register </Link>
      </nav>
    </div>
  );
}