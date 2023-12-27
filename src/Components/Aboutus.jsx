import React, { useState } from "react";
import "../Style/All.css";
import { Element } from "react-scroll"; // Import Element from react-scroll
import blex7 from "../images/rigjt.jpg";
import "../Style/Aboutus.css"

const Aboutus = () => {
 

  return (
    <Element name="aboutus">
      <div className="section">
        {/* Left Column (Text) */}
        <div className="column">
          <div className="heading_container" style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <h2>
              About <span style={{ color: "#26667f" }}>System</span>
            </h2>
          </div>
          <p style={{paddingTop:'2rem'}}>
            A recent study highlights that individuals responsible for sourcing
            spend more than 60 working hours after choosing a product from a B2B
            platform. This timeframe includes crucial tasks like manufacturing
            audits, price negotiations, quality assurance, and other essential
            factors. Emphasizing the value of time over money, we assert, "Our
            most precious commodity is time; while money can be earned, time
            cannot be recreated." Our mission is to save valuable time for both
            buyers and sellers by offering a targeted and efficient approach.
          </p>
          <p>
            <p>
              Blex7 is well-equipped with the necessary networks,
              infrastructure, personnel, and resources to secure optimal
              opportunities. Our cutting-edge AI Procurement system is
              specifically designed to streamline the sourcing process from
              China, whether for a single unit or large-scale production of your
              brand. The system seamlessly integrates with a vast network of
              reputable manufacturers. Our manufacturer auditors conduct
              rigorous assessments of their production capabilities and supply
              capacity before granting access to our platform.
            </p>
            <p>
              A robust Product Ecosystem is crucial for enhancing a company's
              revenue. With the advanced systems offered by Blex7, companies can
              swiftly conduct Return on Investment (ROI) analyses within a few
              simple steps, a process that conventionally spans weeks using
              traditional methods. This efficiency is attributed to Blex7's
              extensive network encompassing manufacturers, shippers, and
              Customs Clearance companies. This broad network not only expedites
              the process but also affords companies a clear insight into their
              profitability even before embarking on a detailed SWAT analysis
            </p>

            <p>
              Through the Blex7 system, you gain real-time visibility into the
              entire process, accessible from your computer or mobile device.
              Monitoring order status and production progress ensures a 99.99%
              error-free product and on-time delivery. This exclusive access to
              a niche market, not available on platforms like Alibaba.com and
              1688.com, empowers your business with unparalleled opportunities.
            </p>

            <p>
              Blex7 maintains close connections with an extensive network of
              logistics, shipping, and customs clearance companies, guaranteeing
              precise quotations for your shipping and customs clearance
              procedures"
            </p>
          </p>
        </div>

        {/* Right Column (Image) */}
        <div className="right-column">
          {/* Add your image source here */}
          <img src={blex7} alt="Sample Image" className="image" />
        </div>
      </div>
    </Element>
  );
};



export default Aboutus;
