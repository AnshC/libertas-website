import React from "react";

import "./flexy.ss.css";
import "./BlogPage.css";

import { Footer } from "./footer";

function BlogPage() {
  return (
    <div className="blogpage-content">
      <div className="hero-m-n align-center hero-blog">
        <h1 className="blog-head">
          <span id="head">Libertas</span> Blog
        </h1>
        <a
          href="https://thelibertas.blogspot.com/"
          target="blank"
          className="m-y1 a-blog"
        >
          View Our Blog Here!
        </a>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScMWMGEqY-jmIydwkZFySljpAC3YV-UV9pO8Hxed8Nxw1Q_ww/viewform?embedded=true"
        width="75%"
        height="1000"
        frameBorder="0"
        className="google-form-iframe"
        title="google form"
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
}

export default BlogPage;
