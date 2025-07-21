import React from "react";

import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile2.jpg";

const about = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme-img" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Praveen — a passionate full-stack developer with a strong
              foundation in React, Django rest framework, and modern web
              technologies. I enjoy building clean, user-friendly, and
              responsive applications that solve real-world problems.
            </p>
            <p>
              With a background in computer science and hands-on experience in
              developing both frontend and backend systems, I’m always eager to
              learn new tools, work on challenging projects, and collaborate
              with like-minded individuals. Whether it's web development, API
              integration, or performance optimization — I love bringing ideas
              to life through code.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "75%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "65%" }}></hr>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default about;
