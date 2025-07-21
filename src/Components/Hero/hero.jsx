import React from "react";
import "./hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import profile_img from "../../assets/profile_img1.jpg";
const hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="profile" />
      <h1>
        <span>I'm Praveen R,</span> Full stack Developer
      </h1>
      <p>I'm a FullStack Developer-Fresher</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default hero;
