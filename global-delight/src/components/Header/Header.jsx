import "./header.css";
import logo from "../../assets/GDPL-Logo-1.png";
import languageicon from "../../assets/language-icon.png";
import { useState } from "react";
import ProudctdropDown from "./proudctdropDown";
import { Link } from "react-router-dom";



const Header = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };



  return (
    <div className="header">
      <div className="logo-img-div">
      <Link to="/"> <img className="logo-img" src={logo} alt="" /></Link> 
      </div>
      <div>
        <input title="s" className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#work" className="product-li-head" > products </a>
           {isDropdownVisible && <ProudctdropDown  />}
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#careers">Business</a>
          </li>
          <li>
            <a href="#contact">Support</a>
          </li>
          <li>
            <a href="#contact">Blog</a>
          </li>
          <li>
            <a href="#contact">store</a>
          </li>
          <li>
            <img className="language-icon-1" src={languageicon} alt="" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
