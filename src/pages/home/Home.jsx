import "./home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Bike1 from "../../assets/img/bike1.jpg";
// import Bike3 from "../../assets/img/contact.jpg";
// import Bike4 from "../../assets/img/information.jpg";
import { Parallax } from "react-parallax";
import { FaInfoCircle } from "react-icons/fa";
import {MdDirectionsBike} from "react-icons/md";
import {IoMdContact} from "react-icons/io";
import { Animated } from "react-animated-css";
import bgImage from "../../assets/img/template1.jpg";


const Home = () => {
  const [bikes, setBikes] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44322/api/car")
      .then((response) => response.json())
      .then((data) => {
        setBikes(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://localhost:44322/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <React.Fragment>
      <Parallax bgImage={bgImage} strength={200}>
        <div style={{ height: "400px" }}></div>
      </Parallax>
      <div className="home-container">
        <div className="row m-0" id="banner-container">
          <div className="col-12 col-md p-0">
            <div className="banner-item">
              
              <Animated
                  animationIn="bounceIn"
                  animationOut="bounceOut"
                  animationInDuration={2000}
                  animationOutDuration={3000}
                  isVisible={true}
                >
                  <Link to="/bikes">
                  <MdDirectionsBike
                   color="#610fd6"
                    style={{ height: 400, width: 250 }}
                    className="icon-circle-info"
                  />
                  </Link>
                </Animated>
                <div className="banner-text">
                  <h2>Find Your Bike!</h2>
                </div>
            </div>
          </div>
          <div className="col-12 col-md p-0">
            <div className="banner-item">
              
                <Animated
                  animationIn="bounceIn"
                  animationOut="bounceOut"
                  animationInDuration={2000}
                  animationOutDuration={3000}
                  isVisible={true}
                >
                  <Link to="/contacts">
                  <IoMdContact
                   color="#610fd6"
                    style={{ height: 400, width: 250 }}
                    className="icon-circle-info"
                  />
                  </Link>
                </Animated>
                <div className="banner-text">
                  <h2>Contacts us</h2>
                </div>
            
            </div>
          </div>
          <div className="col-12 col-md p-0">
            <div className="banner-item">
              
              <Animated
                  animationIn="bounceIn"
                  animationOut="bounceOut"
                  animationInDuration={2000}
                  animationOutDuration={3000}
                  isVisible={true}>
                    <Link to="/information">
                  <FaInfoCircle
                    color="#610fd6"
                    style={{ height: 400, width: 250 }}
                    className="icon-circle-info"/>
                    </Link>
                </Animated>
                <div className="banner-text">
                  <h2>Information</h2>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bikes-favourite-title">
        <h2>Favourite bikes</h2>
        </div>
      </div>
      
      <div id="bikes-container">
          {bikes.map((bike, i) => {
            if(bike.available === true)
            {
              return (
                <div className="col-sm-4">
                  <section id={`bike-${i}`} className="bike-wrapper">
                    <img
                      className="img-thumbnail"
                      src={`https://localhost:44322/${bike.img}`}
                      alt={bike.name}
                    />
                    <div className="bike-name">
                      <h2>{bike.name}</h2>
                    </div>
                    <div className="bike-description">
                      <p className="responsive-text">{bike.descriptionBike}</p>
                     
                    </div>
                    <div className="bike-price">
                      <p>
                        Price:{" "}
                        <p className="bike-price-color">${bike.priceBike}</p>
                      </p>
                    </div>
                    <div className="bike-category">
                      <p>
                        Bike category:
                        <p className="mBike">{bike.category.categoryName}</p>
                      </p>
                    </div>
                    <div className="bike-available">
                      <p className="responsive-text">
                      <CategoryAvailable available={bike.available}></CategoryAvailable>
                      </p>
                    </div>
                    <div className="bike-btn-details">
                      <a
                        type="submit"
                        href={`bike-${i}`}
                        rel="modal"
                        className="btn btn-info"
                        id="btn-details"
                      >
                        Details
                      </a>
                    </div>
                  </section>
                </div>
              );
            }
            
          })}
        </div>
      
      {/* <Button backgroundColor="blue" color="white">
        okay
      </Button>
      <Button backgroundColor="red">cancel</Button>
      <Button backgroundColor="green">back</Button>
      <Button
        onClick={() => {
          console.log("Next");
        }}
      >
        next
      </Button> */}
    </React.Fragment>
  );
};
const CategoryAvailable = (props) => {
  if (props.available === true) {
    return (
      <div class="available">
        <p class="font-color-available">Available: </p>
        <span class="checkmark">
          <div class="checkmark_circle"></div>
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
      </div>
    );
  } else {
    return (
      <div class="not-available">
        <p class="font-color-not-available">Not available: </p>
        <span class="not-checkmark">
          <div class="not-checkmark_circle"></div>
          <div class="not-checkmark_stem"></div>
          <div class="not-checkmark_kick"></div>
        </span>
      </div>
    );
  }
};
export default Home;
