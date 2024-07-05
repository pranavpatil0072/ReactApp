import React from "react";
import find from "./find.png";
import findsurg from "./findsurg.png";
import finddr from "./finddr.webp";
import Periods from "./Periods.webp";
import Acne from "./Acne.webp";
import baby from "./baby.png";
import wellness from "./wellness.webp";
import Issue from "./Issue.png";
import coughing from "./coughing.webp";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <div class="main">
              <ul>
                <li class="p1">
                  <div class="h1">practo</div>
                </li>
                <li class="p2"></li>
              </ul>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                <p
                    style={{
                      marginLeft: 5 + "em",
                      fontSize: 16.5 + "px",
                      fontFamily:"sans-serif",
                      color:"black",
                      fontWeight:"light",
                  
                    
                    }}
                >
                    Find Doctors
                    </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <p
                    style={{
                      marginLeft: 0.5 + "em",
                      fontSize: 16.5 + "px",
                      fontFamily:"sans-serif",
                      color:"black",
                      fontWeight:"light",
                  
                    }}
                  >
                    Video consult
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <p
                    style={{
                      marginLeft: 0.8 + "em",
                      fontSize: 16.5 + "px",
                      fontFamily:"sans-serif",
                      color:"black",
                      fontWeight:"light",
                  
                    }}
                  >
                    Surgeries{" "}
                  </p>
                </a>
              </li>
            </ul>

            <div class="dropdown">
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: 13 + "em",
                  fontSize: 15 + "px",
                  fontWeight: "light",
                  
                 
                }}
                class=" dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Corporates
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: 15 + "px",
                      
                    }}
                    class="dropdown-item"
                    href="#"
                  >
                    Health&Wellness plans
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Group insurance
                  </a>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: 2 + "em",
                  fontSize: 15 + "px",
                  fontWeight: "light"
                }}
                class=" dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Security & help
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Data security
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <button class="sigbut" id="su" onclick="sig()" type="submit">
              Login/Signup
            </button>
          </div>
        </nav>
        <div class="container">
          <div class="text-container">
            <input
              style={{
                marginLeft: -0.5 + "em",
                padding: 5.5 + "px",
                width: 17 + "em",
                marginTop: 1.5 + "em",
              }}
              type="text"
              placeholder="Search Location"
            />
            <datalist id="Locations">
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Solapur">Solapur</option>
              <option value="Delhi">Delhi</option>
              <option value="Beed">Beed</option>
              <option value="Gurgram">Gurgram</option>
              <option value="Banglore">Banglore</option>
              <option value="Hydrabad">Hyderabad</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Chatrapati-Sambhajinagar">
                Chatrapati-Sambhajinagar
              </option>
              <option value="Nashik">Nashik</option>
            </datalist>
          </div>
        </div>

        <>
          <input
            style={{
              position: "absolute",
              top: 7.35 + "em",
              padding: 5.5 + "px",
              left: 19.6 + "em",
              width: 25 + "em",
            }}
            id="search-bar"
            type="text"
            placeholder="&#128269;Search doctors,clinics,hospitals,etc"
          />
          <div id="map" />
        </>
        <div>
          <div className="main">
            <div className="cont2">
              <div className="aaa">
                <div className="ic1">
                  <img
                    src={find}
                    style={{ height: 150 + "px", width: 140 + "px" }}
                  />
                </div>
                <div className="aaa1">
                  <h3>Instant Video Consultation</h3>
                  <p className="aaa3">Connect within 60 secs</p>
                </div>
              </div>
              <div className="bbb">
                <div className="ic2">
                  <img
                    src={finddr}
                    style={{ height: 153 + "px", width: 150 + "px" }}
                  />
                </div>

                <div className="bbb1">
                  <h3>Find Doctors Near<h4 className="you"> You</h4></h3>
                  <p className="bbb3">Confirmed appoinments</p>
                </div>
              </div>

              <div className="ccc">
                <div className="ic3">
                  <img
                    src={findsurg}
                    style={{ height: 140 + "px", width: 150 + "px" }}
                  />
                </div>
                <div className="ccc1">
                  <h3>Surgeries</h3>
                  <p className="ccc3">Safe and trusted surery centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h4 style={{marginLeft:1 + "em"}}>Consult top doctors online for any health concern</h4>
        <button class="sig"  onclick="sig()" type="submit">
              View All Specialities
            </button>
        <p style={{marginLeft:2 + "em"}}>
          Private online consultations with verified doctors in all specialists
        </p>

        <div className="mn">
          <div className="pratik">
            <img
              style={{
                height: 8 + "em",
                width: 8 + "em",
                marginLeft: 3.5 + "em",
              }}
              src={Periods}
            />
            <p style={{ marginLeft: 70 + "px", fontSize: 14 + "px" }}>
              Periods doubt or <br /> Pregnancy
            </p>
            <p className="p" style={{ fontSize: 14 + "px",  marginLeft: 70 + "px" }}>
              CONSULT NOW
            </p>
          </div>

          <div className="pratik2">
            <img
              style={{
                height: 7 - 9 + "em",
                width: 8 + "em",
                marginLeft: 3 + "em",
              }}
              src={Acne}
            />
            <p style={{ marginLeft: 59 + "px", fontSize: 14 + "px" }}>
              Acne pimple or
              <br />
              skin issue
            </p>
            <p className="q" style={{ fontSize: 14 + "px" }}>
              CONSULT NOW
            </p>
          </div>

          <div className="pratik5">
            <img
              style={{
                height: 8 + "em",
                width: 8.7 + "em",
                marginLeft: 3 + "em",
              }}
              src={Issue}
            />
            <p style={{ marginLeft: 75 + "px", fontSize: 14 + "px" }}>
              Performance in 
              <br />
              bed
            </p>
            <p className="t" style={{ fontSize: 14 + "px",marginLeft: 70 + "px" }}>
              CONSULT NOW
            </p>
          </div>
          <div className="pratik4">
            <img
              style={{
                height: 8 + "em",
                width: 8 + "em",
                marginLeft: 3 + "em",
              }}
              src={coughing}
            />
            <p style={{ marginLeft: 70 + "px", fontSize: 14 + "px" }}>
              Cold,cough or
              <br />
              fever
            </p>
            <p className="s" style={{ fontSize: 14 + "px", marginLeft: 70 + "px"  }}>
              CONSULT NOW
            </p>
          </div>

          <div className="pratik6">
            <img
              style={{
                height: 8 + "em",
                width: 8.7 + "em",
                marginLeft: 3 + "em",
              }}
              src={baby}
            />
            <p style={{ marginLeft: 79 + "px", fontSize: 14 + "px" }}>
            Child not feeling
              <br />
              well
            </p>
            <p className="u" style={{ fontSize: 14 + "px" }}>
              CONSULT NOW
            </p>
          </div>
          <div className="pratik3">
            <img
              style={{
                height: 8 + "em",
                width: 8 + "em",
                marginLeft: 3 + "em",
              }}
              src={wellness}
            />
            <p style={{ marginLeft: 70 + "px", fontSize: 14 + "px" }}>
              Depression or
              <br />
              anxiety
            </p>
            <p className="r" style={{ fontSize: 14 + "px", marginLeft: 70 + "px" }}>
              CONSULT NOW
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
