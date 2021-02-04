import React from "react";

import { Footer } from "./footer";

import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-content">
      <div className="section-one">
        <h2 className="about-head m-y3 p1">
          <span id="head-1">About</span> Us!
        </h2>
        <p className="para">
          Welcome to Libertas!
        </p>
        <p className="para">
          Welcome to Libertas, your number one source for blogs and news related
          to the Human Rights around the globe from different people. We're dedicated to
          giving you the very best of our blogs, with a focus on the unheard
          voices from all around the world. This is an open source platform
          where all the people supporting the protection of the
          Human Rights can discuss and talk about topics related to the Human Rights.
        </p>
        <p className="para">
          Co-founded in 2020 by Ansh C and Pushpendra Dewal for an IGCSE Global
          Perspectives Group Project. Libertas has come a long way from its
          beginnings. We now serve people all over the world, and are excited
          that we're able to turn our passion into our own website.
        </p>
        <p className="para">
          We hope you enjoy our platform as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. If you want to upload a blog please refer to the blog page
          and upload your thoughts out in a form for the blog!
        </p>
        <p className="para">~ Libertas</p>
      </div>
      <div className="section2">
        <h2 className="aim-head m-y3 p1">
          <span id="head-2">Our</span> aim
        </h2>
        <p className="aim-p">
          "To support and magnify unheard voices related to the protection of
          the Human Rights"
        </p>
      </div>
      <div className="section3">
        <h2 className="co-founder-head m-y3 p1">Co-Founders</h2>
        <div className="row">
          <img src="/img/ansh.jpg" alt="Ansh C" className="co-founder-img" />
          <div className="column co-founder-card">
            <h3 className="co-founder">Ansh Chauhan</h3>
            <p className="co-founder-p">
              Ansh C is currently a sophomore in Bodhi International Schoool,
              Jodhpur. Ansh C is a part of many student run organisations
              (international and national) which show his interest towards extra
              curricular activities. The organisations Ansh is part of are
              United Under Arts, Helyx, and Ama21ng. His main hobbies
              include web development and design, and graphic design. You can
              view his personal website{" "}
              <a href="https://anshc.github.io" target="blank">
                here
              </a>
              . During his free time, Ansh does graphic designing and shares it
              on his dribble, he also likes to play CS:GO when he is free. Ansh
              started his coding journey since he was studying in 4th grade, and
              moved from scratch to HTML/CSS/JS. Now he is learning and
              utilising his ReactJS skills.
            </p>
            <p className="co-founder-p m-y1" style={{ color: "crimson" }}>
              Contact: anshc2005@gmail.com | +91 8239755000
            </p>
          </div>
        </div>
        <div className="row">
          <img
            src="/img/pd3.jpg"
            alt="Pushpendra D"
            className="co-founder-img"
          />
          <div className="column co-founder-card">
            <h3 className="co-founder">Pushpendra Dewal</h3>
            <p className="co-founder-p">
              Pushpendra Dewal is a rising sophomore in Bodhi International
              School, Jodhpur. Pushpendra likes to read comics and likes to play
              a variety of video games and is are interested in astronomy. His
              favorite subjects include Chemistry, Mathematics and Physics.
              Pushpendra likes to play fortnite in his free time and is
              currently learning and developing photo editing skills on
              Photoshop.
            </p>
            <p className="co-founder-p m-y1" style={{ color: "crimson" }}>
              Contact: pushpendra.dewal@bodhijodhpur.com | +91 7023171750
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
