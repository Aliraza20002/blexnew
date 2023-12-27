import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../Style/All.css";
import aboutus from "../images/about-img.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Context/LanguageContext";
import "./i18n";
import logistic from "../images/Blex office 1.jpg";

const SliderText = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="slidertext">
      <section
        className="slider_section"
        id="slidertext"
        style={{
          minHeight: "1000px",
          display: "flex",
          alignItems: "stretch",
        }}
      >
       <div
          className="container"
          style={{
            width: "100%", // Set width to 100% to avoid gaps
            maxWidth: "1920px",
            display: "flex",
            justifyContent: "flex-end", // Align items to the end (right side)
          }}
        >
          <div className="row" style={{ flex: 1 }}>
            <div className="col-md-6">
              <div
                className="silder-home-text"
         
              >
                 <div className="detail-box">
                  <div className="heading_container"></div>
                  <p style={{ fontFamily: "auto", color: "black",fontSize:'29px',fontWeight:'500' }}>
                    With years of experience, we have learned that Most Valuable
                    Commodity is not money, but our time. We can always make
                    more money, but we can't make more time
                  </p>

                  <p style={{ fontFamily: "auto", color: "black",fontSize:'18px' }}>
                    At Blex7, we recognize the significance of your most
                    precious resource and provide a solution to enhance your
                    time management. We connect you with a vast network of
                    suppliers offering millions of products, catering to your
                    purchasing needs, whether it's a single item or a
                    large-scale order. Blex7 is highly focused and
                    result-oriented when it comes to assisting you in sourcing
                    the ideal product within your budget.
                  </p>

                

             
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="about-home-video"
                style={{
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                  position: "relative", // Make the position relative for absolute positioning
                }}
              >
                <div
                  className="img-box"
                >
                <img
                    src={logistic}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "14px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default SliderText;