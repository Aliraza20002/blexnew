import React, { useEffect } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import "../Style/All.css";
import "../Style/Responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import earth from "../images/earth_-_55990 (720p).mp4"
import "../Style/Signup.css"

const Slider = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <section className="slider_section" data-aos="fade-down">
      <div className="slider_bg_box">
      <video
  className="hero-video"
  autoPlay
  muted
  playsInline
  loop
  style={{ width: "100%", height: "100%" }}
>
  <source
    src={earth}
    type="video/mp4"
  />
</video>
      </div>
      <div className="container" style={{width:'100%',display:'flex',maxWidth:'1920px',justifyContent:'end',paddingTop:'155px'}}>
        {/* <div style={{width:"50%"}}></div> */}
              
              <div className="right-silder-side" style={{display:'flex',flexDirection:'column',width:'',position:'relative'}}>
              
              <div className="row" style={{paddingLeft:'100px',paddingRight:'92px',display:'none'}}>

              <div className="col-md-7" style={{width:'100%'}}>
                <div className="detail-box" style={{textAlign:'center'}}  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                  <h1>
                    With years of experience, we have learned that <br />
                    "Most Valuable Commodity is not money, but our time. We can
                    always make more money, but we can't make more time
                  </h1>
                  <p>
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

            <div className="signup-form" style={{position:'relative',paddingTop:'34rem'}}>
            <form>


        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <div className="mid-signup">
        <div className="rember-checkbox">
          <input type="checkbox" name="" id="" style={{width:'18px'}} />
          <p className="rember-checkbox-text">Remember me next time</p>
        </div>
        
          <p className="forget-text">Forget Password ?</p>
        </div>

        <button style={{marginTop:'14px'}}>Log In</button>
        <div className="social">
  <div className="go">
    <FaGoogle /> Google
  </div>
  <div className="fb">
    <FaFacebook /> Facebook
  </div>
</div>
      </form>
            </div>

              </div>
       
          </div>

    </section>
  );
};

export default Slider;
