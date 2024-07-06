/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import homeImg from "../../assets/img/home-img.png";

class Home extends Component {
  render() {
    return (
      <section className="home main" id="home">
        <div className="home_container container grid">
          <div className="home_social">
            <span className="home_social-follow">Follow Me</span>
            <div className="home_social-links">
              <a
                href="https://www.linkedin.com/in/neev-jain-898819210/"
                target="_blank"
                className="home_social-link"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/neevjain2006"
                target="_blank"
                className="home_social-link"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://instagram.com/neev0511jain/"
                target="_blank"
                className="home_social-link"
              >
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
          <img src={homeImg} alt="home-img" className="home_img" />

          <div className="home_data">
            <h1 className="home_title">Hi, I'm Neev</h1>
            <h3 className="home_subtitle">Student Developer</h3>
            <p className="home_description">
              I'm a student at Boston University studying Computer Engineering.
            </p>
            <a href="#about" className="button">
              <i className="uil uil-user button_icon"></i>
              More About Me
            </a>
          </div>

          <div className="my_info">
            <a href="https://www.linkedin.com/in/neev-jain-898819210/">
              <div className="info_item">
                <i className="uil uil-linkedin info_icon"></i>

                <div>
                  <h3 className="info_title">Linked In</h3>
                  <span className="info_subtitle">Neev Jain</span>
                </div>
              </div>
            </a>

            <a href="https://github.com/neevjain2006">
              <div className="info_item">
                <i className="uil uil-github info_icon"></i>

                <div>
                  <h3 className="info_title">Github</h3>
                  <span className="info_subtitle">neevjain2006</span>
                </div>
              </div>
            </a>

            <a href="https://www.instagram.com/neev0511jain/">
              <div className="info_item">
                <i className="uil uil-instagram info_icon"></i>

                <div>
                  <h3 className="info_title">Instagram</h3>
                  <span className="info_subtitle">@neev0511jain</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
