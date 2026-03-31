import {Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png"

export default function Navbar() {

  return (

    <div className="navbar">
      <img className="logo" src={Logo} />
        <Link className="links" to="/"> Home </Link>
        <Link className="links" to="/games"> Selection </Link>
        <Link className="links" to="/games/easy"> Easy Game </Link>
        <Link className="links" to="/games/normal"> Normal Game </Link>
        <Link className="links" to="/scores"> High Scores </Link>
        <Link className="links" to="/rules"> Rules </Link>
        <Link className="links" to="/login"> Log In </Link>
        <Link className="links" to="/register"> Register </Link>
    </div>
  );
}