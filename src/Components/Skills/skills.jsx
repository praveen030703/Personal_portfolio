import React from "react";
import "./skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import skill_data from "../../assets/skill_data";

const skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skill-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="theme-image" />
      </div>
      <div className="skill-container">
        {skill_data.map((skill, index) => {
          return <img key={index} src={skill.s_img} alt="work-image" />;
        })}
      </div>
    </div>
  );
};

export default skills;
