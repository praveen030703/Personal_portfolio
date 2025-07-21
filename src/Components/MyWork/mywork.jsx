import React from "react";
import "./mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const mywork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="theme-image" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-item" key={index}>
            <img src={work.w_img} alt={`work-${index}`} />
            {/* <p className="mywork-caption">{work.w_name}</p> */}
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="arrow-image" />
      </div>
    </div>
  );
};

export default mywork;
