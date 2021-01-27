import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "./footer";

import "./HomePage.css";
import "./flexy.ss.css";

import {news, blog, about} from './JS/link'
 
function HomePage() {
  return (
    <div className="homepage-content">
      <div className="hero-m-n align-center hero-img">
        <div
          className="hero-overlay align-center"
          style={{ flexDirection: "column" }}
        >
          <p className="hero-title p1">We are Libertas</p>
          <p className="">A community protecting the Human and Social Rights</p>
        </div>
      </div>
      <div className="body-content">
        <h1 className="waw-head p3">What are We?</h1>
        <div className="waw-container">
          <img
            src="https://cdn.glitch.com/b8424ef6-1a56-4d04-8b84-245761355699%2Frainbow-flag-4426296_1920.jpg?v=1598180190239"
            alt="We support everyone!"
            style={{ padding: "10px" }}
            className="waw-img"
          />
          <p className="waw-p p1">
            Libertas is a community that strives to protect the{" "}
            <a
              href="https://www.un.org/en/sections/issues-depth/human-rights/"
              target="blank"
              style={{ color: "crimson" }}
            >
              Human Rights
            </a>{" "}
            (UNHR). Our aim is to amplify unheard voices related to the
            protection of Human and Social Rights! We provide news and a blogging
            service to support the Human Rights, we ensure that everyone's voice is
            heard by our blogs. The way we convey is the way you want to convey
            yourself to the world. We are a platform for global citizens to
            voice their concerns regarding Human Rights.
          </p>
        </div>
        <div className="wwo-container p2" style={{ marginTop: "15px" }}>
          <h1 className="wwo-head p1">What we Offer</h1>
          <div className="row">
            <div className="column align-h">
              <h2 className="wwo-news">News</h2>
              <img
                src="https://cdn.glitch.com/b8424ef6-1a56-4d04-8b84-245761355699%2Fnews.png?v=1598541647684"
                alt="Informative News!"
                className="news-png m-y2"
                onClick={news}
              />
              <p className="news-p">
                We offer news related to Human Rights sourced by the NYT
              </p>
            </div>
            <div className="column align-h">
              <h2 className="wwo-blogs">Blogs</h2>
              <img
                src="https://cdn.glitch.com/b8424ef6-1a56-4d04-8b84-245761355699%2Fblog.png?v=1598541368467"
                alt="Awesome Blogs!"
                className="blog-png m-y2"
                onClick={blog}
              />
              <p className="blog-p">
                We provide a way to communicate and read about the Human Rights
              </p>
            </div>
            <div className="column align-h">
              <h2 className="wwo-community">A community</h2>
              <img
                src="https://cdn.glitch.com/b8424ef6-1a56-4d04-8b84-245761355699%2Fworld.png?v=1598541474985"
                className="community-png m-y2"
                alt="A beautiful community!"
                onClick={about}
              />
              <p className="community-p">
                We provide as a platform for a safe community
              </p>
            </div>
          </div>
        </div>
        <div className="blog-container align-center">
          <div className="blog-overlay">
            <h2 className="blog-h3 m-y7 p3">
              Want to write a blog related to the Human Rights for Libertas? Fill up{" "}
              <Link to="/blog" className="blog-link">
                this form
              </Link>{" "}
              to write and submit a blog now!
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
