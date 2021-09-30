import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "ownnavbar ownnavbar-sticky" : "ownnavbar"}>
    <div  className="ownnavbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="ownnavbar--logo" /> : null}
      <h1 class="text-white navbarmob"> Portfolio</h1>
    </div>
    <ul className="ownnavbar--link">
      <a href="#home"><li className="ownnavbar--link-item">Home</li></a>
      <a href="#about"><li className="ownnavbar--link-item">About</li></a>
      <a href="https://www.linkedin.com/in/joseph-drozd-a17664151/"><li className="ownnavbar--link-item">Contact</li></a>
    </ul>
  </nav>
)};
export default Navbar;
