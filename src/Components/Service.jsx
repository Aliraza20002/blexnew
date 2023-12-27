
import React, { useEffect } from 'react';
import { Element } from 'react-scroll'; // Import Element from react-scroll
import "../Style/All.css";
import "../Style/Responsive.css";
import Register from "../images/Register.png";
import submit from "../images/Submit.png";
import Money from "../images/money.png";
import Tracking from "../images/trackable.png";
import quality from "../images/quiality.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/service.css"

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="service"> {/* Add this line to wrap the component with Element */}
      <section id="service" className="service_section layout_padding" data-aos="fade-right">
        <div className="service_container" >
          <div className="container" style={{maxWidth:'1920px'}}>
            <div className="heading_container">
  
              <p>
              Its Simple as 1, 2, 3
              </p>
            </div>
            <div className="row" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',paddingTop:'4rem'}}>
              {services.map((service, index) => (
                <div className="col-md-6" key={index} style={{ width: 'calc(20% - 15px)', marginBottom: '30px', marginLeft: index % 2 === 1 ? '0' : '' }}>


                  <div className="box">
                    <div className="img-box">
                      <img src={service.image} alt="" />
                    </div>
                    <div className="detail-box text-center">
                      <h5>{service.title}</h5>
                      <p style={{fontSize:'12px'}}>
                        {service.fullContent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

const services = [
  {
    title: "Register",
    fullContent: "Register with Blex7 Systems, it's simple.",
    image: Register,
  },
  {
    title: "Submit",
    fullContent: "Submit a purchase inquiry by Blex7 account, our machine learning technology will perform a detailed analysis, select the right supplier, and send the quotation for your approval.",
    image: submit,
  },
  {
    title: "Pay",
    fullContent: "Pay as per the inquiry.",
    image: Money,
  },
  {
    title: "Trackable production",
    fullContent: "Trackable production process, every step of production makes sure that the quality of the product is as per your quality parameters.",
    image: Tracking,
  },
  {
    title: "Final quality and quantity",
    fullContent: "Final quality and quantity inspection, shipments, all documents including BL, packing list, and commercial invoice within a single click. Bounce option: Quotations from Customs clearance agents at the port of discharge and shipping quotations from shipping companies on a single click.",
    image: quality,
  },

];

export default Service;
