import React from "react";
import "./AboutUs.css";
import group from "../image/group.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus_main">
      <section className="about-section">
        <div className="container">
          <div className="row clearfix">
            <div className="content-column col-md-6 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">About Us</div>
                  <h2 className="h2-main_aboutus">Who are we</h2>
                </div>
                <div className="text">
                We are 4 young professionals who teamed up to offer you an innovative online experience.
                 Through our site you can access two separate products - “Workshop” and “Homecook”.
                </div>
                <Link to="/workshop">
                  <button className="theme-btn btn-style-three">
                    WORKSHOP
                  </button>
                </Link>

                <Link to="/food">
                  <button className="theme-btn btn-style-three">
                  HOMECOOK
                  </button>
                </Link>
                
              </div>
            </div>

            <div className="image-column col-md-6 col-sm-12 col-xs-12">
              <div
                className="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src={group} alt="" />
                  <div className="overlay-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
