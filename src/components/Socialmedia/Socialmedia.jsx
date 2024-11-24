import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import "./Socialmedia.css";
import React from "react";

export default function Socialmedia() {
  return (
    <div className="socialMediaWrapper">
      <div className="sosmedContainer">
        <div className="logo">
          <BsInstagram className="sosmedIcon iconInstagram" />
        </div>
        <div className="sosmedDescription">
          <h2>Instagram</h2>
          <div className="text">
            On these platforms, I share my thoughts in long-form content. It
            covers in-depth life, mental health, productivity, and
            self-improvement.
          </div>
          <div className="sosmedBtnWrapper">
            <button className="sosmedBtn">Website</button>
            <button className="sosmedBtn">Medium</button>
          </div>
        </div>
      </div>
      <div className="sosmedContainer">
        <div className="logo">
          <BsLinkedin className="sosmedIcon iconLinkedin" />
        </div>
        <div className="sosmedDescription">
          <h2>Linkedin</h2>
          <div className="text">
            On these platforms, I share my thoughts in long-form content. It
            covers in-depth life, mental health, productivity, and
            self-improvement.
          </div>
          <div className="sosmedBtnWrapper">
            <button className="sosmedBtn">Website</button>
            <button className="sosmedBtn">Medium</button>
          </div>
        </div>
      </div>
      <div className="sosmedContainer">
        <div className="logo">
          <BsTwitter className="sosmedIcon iconTwitter" />
        </div>
        <div className="sosmedDescription">
          <h2>Twitter</h2>
          <div className="text">
            On these platforms, I share my thoughts in long-form content. It
            covers in-depth life, mental health, productivity, and
            self-improvement.
          </div>
          <div className="sosmedBtnWrapper">
            <button className="sosmedBtn">Website</button>
            <button className="sosmedBtn">Medium</button>
          </div>
        </div>
      </div>
      <div className="sosmedContainer">
        <div className="logo">
          <BsFacebook className="sosmedIcon" />
        </div>
        <div className="sosmedDescription">
          <h2>Facebook</h2>
          <div className="text">
            On these platforms, I share my thoughts in long-form content. It
            covers in-depth life, mental health, productivity, and
            self-improvement.
          </div>
          <div className="sosmedBtnWrapper">
            <button className="sosmedBtn">Website</button>
            <button className="sosmedBtn">Medium</button>
          </div>
        </div>
      </div>
    </div>
  );
}
