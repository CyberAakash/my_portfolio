//jshint esversion:6

import "./navbar.css";

import React from "react";

// import { useState, useEffect } from "react";

const HomeNav = () => {
  return (
    <div>
      {/* <div className="header_innerShadow"></div> */}
      <section className="nav_bar">
        <nav>
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
            <hr />
            <div className="nav_bottom">
              <a href="#">
                <i class="fa fa-brands fa-square-facebook fa-2x"></i>
              </a>

              <a href="#">
                <i class="fa fa-brands fa-linkedin fa-2x"></i>
              </a>

              <a href="https://github.com/CyberAakash">
                <i class="fa fa-brands fa-square-github fa-2x"></i>
              </a>

              <a href="#">
                <i class="fa fa-brands fa-medium fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default HomeNav;
