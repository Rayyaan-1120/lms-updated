import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer
      className="custom-footer container-fluid"
      style={{ marginLeft: 0, backgroundColor: "green" }}
    >
      <div className="footer-big main-footer">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-12"
              style={{ width: "100%", marginLeft: 0 }}
            >
              <div className="footer-widget">
                <div className="widget-about">
                  <img
                    className="img-fluid footer-img"
                    src="transparntlogo.png"
                    alt=""
                  />
                  <p className ='para-text'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div class="copyright-text">
                    <p className ='para-text'>
                      © 2021
                      <a className="main-footer1" href="#">
                        Jawan Tech
                      </a>
                      . All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1 ">
                  <h4 className="footer-widget-title footer-title-margin footer-title">EXPLORE</h4>
                  <ul className='footer-item-align'>
                    <li>
                      <a className="main-footer para-text" href="#">
                        Wordpress
                      </a>
                    </li>
                    <li>
                      <a className="main-footer para-text" href="#">
                        Plugins
                      </a>
                    </li>
                    <li>
                      <a className="main-footer para-text" href="#">
                        Joomla Template
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

             <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="">
                  <h4 className="footer-widget-title footer-title-margin footer-title">Courses</h4>
                  <ul className='footer-item-align'>
                    <li>
                      <a className='main-footer para-text' href="#">About Us</a>
                    </li>
                    <li>
                      <a className='main-footer para-text' href="#">How It Works</a>
                    </li>
                    <li>
                      <a className='main-footer para-text' href="#">Affiliates</a>
                    </li>
                    <li>
                      <a className='main-footer para-text' href="#">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4 ">
              <div className="footer-widget cus-1">
                <div className="footer-menu no-padding input-container">
                  <h4 className="footer-widget-title footer-title">Contact Us</h4>
                  <input className= 'input'
                    type= 'text'
                    // required={required}
                    // onChange={onChange}
                    placeholder= 'Enter your email'
                    // maxLength={maxLength}
                  />
                     <input
                     className= 'input'
                    type= 'text'
                    // required={required}
                    // onChange={onChange}
                    placeholder= 'Enter your message'
                    // maxLength={maxLength}
                  />
                  <br/>
                  <button >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
