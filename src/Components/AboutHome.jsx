import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../Style/All.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import container from "../images/container_-_23759 (1080p).mp4";

const AboutHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="abouthome">
      <section
        className="slider_section"
        id="abouthome"
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(0deg, rgb(69 86 108) 0%, rgb(5 12 21) 100%)",
          position: "relative",
          overflow: "hidden", // Hide content overflowing from the section
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            display: "flex",
            maxWidth: "1920px",
            justifyContent: "end",
            minHeight: "100vh", // Set minimum height to viewport height
          }}
        >
          {/* First Row - Video */}
          <div
            className="about-home-video"
            style={{
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              borderRadius: "14px",
            }}
          >
            <video
              className="About-home-video"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={container} type="video/mp4" />
            </video>
          </div>

          {/* Second Row - Text */}
          <div
            className="about-home-text"
       
          >
            <div
              className="detail-box"
              style={{
                width: "36%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className="heading_container">
                <h2 style={{color:'white'}}>
                  About <span style={{color:'#26667f'}}>System</span>
                </h2>
              </div>
               <p className="About-after-text">"Blex7: AI-powered, Streamlining China Sourcing."</p>
              <Link to="/about" className="Read-more-btn">
                Read More
              </Link>
            </div>
            <div className="detail-box" style={{ width: "64%" }}>
              <p className="About-home-text">
                "Blex7 is well-equipped with the necessary networks,
                infrastructure, personnel, and resources to secure optimal
                opportunities. Our cutting-edge AI Procurement system is
                specifically designed to streamline the sourcing process from
                China, whether for a single unit or large-scale production of
                your brand. The system seamlessly integrates with a vast network
                of reputable manufacturers. Our manufacturer auditors conduct
                rigorous assessments of their production capabilities and supply
                capacity before granting access to our platform."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutHome;
