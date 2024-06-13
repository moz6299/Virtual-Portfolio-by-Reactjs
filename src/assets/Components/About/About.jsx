import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import prof from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img  src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="imgino" src={prof} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              labore, similique doloribus atque est rerum. Veritatis, magni eum?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievments">
        <div className="about-achievment">
          <h1>10+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>80+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>13+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
