import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Style/All.css";
import "../Style/Responsive.css";
import logo from "../images/logo.jpg";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Context/LanguageContext"; // Replace with the actual path
import "./i18n";
import LanguageDropdown from "./Languagedrop";
const Topbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [visibleRight, setVisibleRight] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { t, i18n } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const handleNavLinkClick = (link) => {
    if (activeLink === link) {
      setActiveLink("");
    } else {
      setActiveLink(link);
    }
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsTop(scrolled === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setVisibleRight(!visibleRight);
  };

  return (
    <header className={`header_section ${isTop ? "" : "scrolled"}`}>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <NavLink to="/" exact className="navbar-brand">
              <img src={logo} alt="" style={{ width: "7rem" }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
              style={{ display: window.innerWidth <= 1920 ? "" : "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav ${isTop ? "" : "hidden"}`}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className={`nav-link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("home")}
                  >
                    {t("Home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={`nav-link ${
                      activeLink === "aboutus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("aboutus")}
                  >
                    {t("How_Blex7_Works")}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contactus"
                    className={`nav-link ${
                      activeLink === "contactus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("contactus")}
                  >
                    {t("Contact_Us")}
                  </NavLink>
                </li>
                <div
                  className="flex gap-2 justify-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  <Button
                    icon={<FaBars />}
                    onClick={() => setVisibleRight(true)}
                  />
                </div>
              </ul>

              <Sidebar
                visible={visibleRight}
                position="right"
                onHide={() => setVisibleRight(false)}
              >
                <h2>{t("Menu")}</h2>
                <p style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                  <ul className="navbar-nav" style={{ width: "76%" }}>
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        exact
                        className={`nav-link ${
                          activeLink === "home" ? "active" : ""
                        }`}
                        onClick={() => handleNavLinkClick("home")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className={`nav-link ${
                          activeLink === "aboutus" ? "active" : ""
                        }`}
                        onClick={() => handleNavLinkClick("aboutus")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        How blex works
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/contactus"
                        className={`nav-link ${
                          activeLink === "contactus" ? "active" : ""
                        }`}
                        onClick={() => handleNavLinkClick("contactus")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Contact us
                      </NavLink>
                    </li>
                  </ul>

               <LanguageDropdown/>
                </p>
              </Sidebar>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
