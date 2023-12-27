import React from "react";
import "../Style/All.css";
import "../Style/Responsive.css";

const TrackShip = () => {
  return (
    <section className="track_section layout_padding">
      <div className="track_bg_box">
        <img src="images/track-bg.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="heading_container">
              <h2>Track Your Shipment</h2>
            </div>
            <p>
              "Empowering your logistics experience, Blex7's 'Track Your
              Shipment' feature ensures real-time visibility into your orders.
              Seamlessly monitor the journey of your products, from
              manufacturing to delivery, with precision and efficiency. Trust
              Blex7 to provide you with the tools for transparent and reliable
              shipment tracking, reinforcing our commitment to delivering
              unparalleled sourcing solutions."
            </p>
            <form action="">
              <input type="text" placeholder="Enter Your Tracking Number" />
              <button type="submit">Track</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShip;
