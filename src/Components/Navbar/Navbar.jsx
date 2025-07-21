import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img
        src={menu_open}
        alt="menu-open-img"
        className="nav-mob-open"
        onClick={openMenu}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menu_close}
          alt="menu-close-img"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>

          {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>

          {menu === "skills" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>

          {menu === "portfolio" ? (
            <img src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
