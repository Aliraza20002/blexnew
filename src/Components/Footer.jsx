import React from 'react'
import "../Style/All.css"
import "../Style/Responsive.css"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Scrolltopbutton from "./ScrollToTopButton"




const Footer = () => {
  return (
<>
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row" style={{display:'flex',alignItems:'center'}}>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>Contact US</h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>Shenzhen Bilaxia Co. , Ltd.</span>
              </a>
         
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>info@blex7.com</span>
              </a>
            </div>
          </div>
          <div className="info_social">
          <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>WORKING HOURS</h4>
            <p>
            Monday to Saturday
            <p>9:00 AM - 6:00 PM</p>
           <p>(China Standard Time)</p>
           <p>深圳比尔拉霞贸易有限公司</p> 
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>Main Menu</h4>
            <div className="info_links">
              <Link className="active" to="">
                <img src="images/nav-bullet.png" alt="" />
                Home
              </Link>
              <Link to="/about" className="" >
                <img src="images/nav-bullet.png" alt="" />
                How Work us
              </Link>
              <Link className="" to="">
                <img src="images/nav-bullet.png" alt="" />
                Contact Us
              </Link>
            
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
        <p style={{fontSize:'14px'}}>
        © <span id="displayYear" /> 2023 All rights Reserved by Blex7 Systems 
      </p>
      <Scrolltopbutton/>
       
        </div>

       
      </div>
    </div>
  </section>
  {/* end info section */}
  {/* footer section */}

</>

  )
}

export default Footer