import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Element } from "react-scroll";
import "../Style/All.css";
import "../Style/Responsive.css";
import blex7 from "../images/rigjt.jpg";

const ContactUs = () => {
  const businessStages = ["Source the first product to start ", "Have succesfully Products and want Expand more", "optimise existings supply chain"];
  const [selectedBusinessStage, setSelectedBusinessStage] = useState(null);
  const [isBusinessStageDropdownOpen, setIsBusinessStageDropdownOpen] =
    useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleBusinessStageClick = () => {
    setIsBusinessStageDropdownOpen(!isBusinessStageDropdownOpen);
  };

  const handleBusinessStageSelect = (stage) => {
    setSelectedBusinessStage(stage);
    setIsBusinessStageDropdownOpen(false);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <Element name="contactus">
      <section id="contactus" className="contact_section">
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{paddingTop:'6rem'}}>
          <div className="row" style={{width:'100%',display:'contents'}}>
            <div className="col-lg-4 col-md-5">
              <div
                className="heading_container"
                style={{
                  textAlign: "center",
                }}
              >
                <h2>Contact Us</h2>
              </div>
              <div className="form_container contact-form">
                <form action="">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Choose Country"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="custom-dropdown">
                    <input
                      type="text"
                      placeholder="Business Stage"
                      onClick={handleBusinessStageClick}
                      value={selectedBusinessStage || ""}
                      readOnly
                      style={{ width: "100%" }}
                    />
                    {isBusinessStageDropdownOpen && (
                      <div className="dropdown-content">
                        {businessStages.map((stage, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleBusinessStageSelect(stage)}
                          >
                            {stage}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <textarea
                      className="message-box"
                      placeholder="Message"
                      style={{ width: "100%", height: "130px" }}
                    ></textarea>
                  </div>
                  <div style={{marginTop:'1rem'}}>
                    <ReCAPTCHA
                      sitekey="your-recaptcha-site-key"
                      onChange={handleRecaptchaChange}
                      size="normal"
                    />
                  </div>
                  <div className="btn_box" style={{marginTop:'2rem'}}>
                    <button style={{ backgroundColor: "#04233b" }}>SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
