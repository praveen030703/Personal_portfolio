import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const contact = () => {
  const postMessase = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "19ee3671-9b5f-4f2d-b416-e308ad10ee70");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you're looking to
            collaborate, hire, or just want to connect—feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-icon" />
              <p>praveenrs1503@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="mail-icon" />
              <p>+91 7639659584</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="mail-icon" />
              <p>Chennai</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={postMessase}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
