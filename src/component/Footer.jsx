import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="infoBox">
        <div className="logo">
          <h1>24 Carrots</h1>
          <p>Catering & Events</p>
        </div>

        <p style={{ width: "50%" }}>
          The event specialists at our Southern California headquarters are
          available to help with every aspect of your event.
        </p>

        <div className="line"></div>

        <div className="fotContent d-flex gap-3">
          <div className="leftOne ">
            <p>Contact us</p>
            <p>Email us</p>
            <p>Find us</p>
          </div>

          <div className="rightOne ">
            <p>714.942.6000 • 800.717.1545</p>
            <p>150 Baker Street East, Costa Mesa, CA 92626</p>
            <p>info@24carrots.com</p>
          </div>
        </div>
      </div>

      <div className="allInfo w-100">

        <div className="row w-100 gap-0 align-items-center justify-content-center p-0 m-0">

          <div className="col-lg-2 col-md-4 col-sm-6 forRes">
            <a href="" className="head">About</a>
            <a href="">About 24 Carrots</a>
            <a href="">Meet the Team</a>
            <a href="">Award & Press</a>
            <a href="">Blog</a>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 forRes">
            <a href="" className="head">
              Services
            </a>
            <a href="">Gourmet Catering</a>
            <a href="">Bar Service</a>
            <a href="">Staffing</a>
            <a href="">Production</a>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 forRes">
            <a href="" className="head">
              Events
            </a>
            <a href="">Weddings</a>
            <a href="">Corporate</a>
            <a href="">Social</a>
            <a href="">Gallery</a>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 forRes">
            <a href="" className="head">
              Venues
            </a>
            <a href="" className="head">
              Careers
            </a>
            <a href="" className="head">
              Contact
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 forRes">

            <a href="" className="head">
              Follow us
            </a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
            <a href="">Pinterest</a>

          </div>

        </div>
      </div>

      
    </div>
          <div className="line2"></div>
          </>
  );
};

export default Footer;
