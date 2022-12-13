//jshint esversion:6

import "./navbar.css";

import React from "react";

import { useState, useEffect } from "react";

const HomeNav = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div>
      {/* <div className="header_innerShadow"></div> */}
      <section className="nav_bar">
        <nav
          style={{
            backgroundColor: show ? "rgb(20,20,20)" : "transparent",
          }}
        >
          <img
            className="nav_logo"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="logo"
          />
          <div className="nav_left">
            <div className="nav_top">
              <ul className="nav_links">
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="nav_bottom">

            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default HomeNav;
