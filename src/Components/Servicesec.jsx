import React from 'react'
import "../Style/service.css"

const Servicesec = () => {
  return (
    <section className="services-section">
    <a name="services" />
    <div className="wrapper">
      <h3>Services</h3>
      <p className="subtitle">We do lots of cool things</p>
      <ul className="services-list">
        <li>
          <div className="image-container">
            <img src="images/icon-pencil.png" alt="services icon" />
          </div>
          <h5>Graphic Design</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
            blandit lacus a laoreet.{" "}
          </p>
          <a href="#">Learn More</a>
        </li>
        <li>
          <div className="image-container">
            <img src="images/icon-camera.png" alt="services icon" />
          </div>
          <h5>Photography</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
            blandit lacus a laoreet.{" "}
          </p>
          <a href="#">Learn More</a>
        </li>
        <li>
          <div className="image-container">
            <img src="images/icon-film.png" alt="services icon" />
          </div>
          <h5>Animation</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
            blandit lacus a laoreet.{" "}
          </p>
          <a href="#">Learn More</a>
        </li>
        <div className="clear" />
      </ul>
    </div>
  </section>
  
  )
}

export default Servicesec