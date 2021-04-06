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
                  <h2 className="h2-main_aboutus">We Are profesional in our culture</h2>
                </div>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
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
