import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "./hamburger.scss";

export const Hamburger = () => {
  const location = useLocation();

  useEffect(() => {
    enableBodyScroll(window);
  }, [location.pathname]);

  const [isActive, setIsActive] = useState(false);

  const myFunction = (e) => {
    e.preventDefault();
    if (isActive === false) {
      setIsActive(true);
      disableBodyScroll(window);
    } else {
      setIsActive(false);
      enableBodyScroll(window);
    }
  };

  return (
    <div className="icon">
      <div className="hamburger_container" onClick={myFunction}>
        <div className={isActive ? "change" : ""}>
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
      </div>
      <div className={!isActive ? "visible" : "icon_info"}>
        <div className="background">
          <nav className="nav">
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#015450",
                  fontWeight: "700",
                }}
                to="/"
              >
                HOME
              </Link>
            </div>
            <div>
              <Link
                style={{ textDecoration: "none", color: "#015450" }}
                to="/portfolio"
              >
                PROJECTS
              </Link>
            </div>
            <div>
              <Link style={{ textDecoration: "none", color: "#015450" }} to="/">
                SERVICES
              </Link>
            </div>
            <div>
              <Link style={{ textDecoration: "none", color: "#015450" }} to="/">
                Contact us
              </Link>
            </div>
          </nav>
          <div className="info">
            Let's talk about your next <br /> project
          </div>
          <button className="button">Let's Talk</button>
          <div className="socials">
            <span>Instagram</span>
            <span>Dribble</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};
