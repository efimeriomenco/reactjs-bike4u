import "./contacts.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleSquare } from "react-icons/ai";
import { Animated } from "react-animated-css";
import { RiContactsLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
const Contacts = () => {
  const [contactFormVisible, setContactFormVisibility] = useState(false);
  const [phoneFormVisible, setPhoneFormVisibility] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
 
  const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName.length < 2 || firstName.length > 30) {
      setErrors({
        ...errors,
        firstName: "Please put firstname at least 50 characters",
      });
      return;
    }
    //post
    console.log(firstName);
    
    if (!/\S+@\S+\.\S+/.test(email)){
      setErrors({
        ...errors,
        email: "Wrong email",
      });
      return;
    }
    console.log(message)
    if (message.length < 15){

      setErrors({
        ...errors,
        message: "Please put firstname at least 50 characters",
      });
      return;
    }
    
  };
  return (
    <React.Fragment>
      <div className="row" id="nowrap-contacts">
        <div className="col-sm-12 col-md-6">
          <Animated
            animationIn="bounceInDown"
            animationOut="bounceOutDown"
            animationInDuration={2000}
            animationOutDuration={1500}
            animateOnMount={false}
            isVisible={phoneFormVisible}
          >
            <form onSubmit={onSubmit} id="form-container" name="registration">
              <h2>Contact us</h2>
              <label
                for="firstname"
                className={errors.firstName ? "error" : ""}
              >
                First Name
              </label>
              <span className="error-message">{errors.firstName}</span>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="firstname"
                placeholder="John"
              />

              <label for="email">Email</label>
              <span className="error-message">{errors.email}</span>
              <input
                
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={errors.email ? "error" : ""}
                id="email"
                placeholder="john@doe.com"
              />
              <label for="message">Message</label>
              <span className="error-message">{errors.message}</span>
              <textarea
                id="textarea-size"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={errors.message ? "error" : ""}
                rows="4"
                placeholder="Put your message..."
              ></textarea>

              <button type="submit" id="form-btn">
                Submit
              </button>
            </form>
          </Animated>
        </div>
        <div class="contacts-btn">
          <RiContactsLine
            onClick={() => setPhoneFormVisibility(!phoneFormVisible)}
          ></RiContactsLine>
          <FiPhoneCall
            onClick={() => setContactFormVisibility(!contactFormVisible)}
          >
            {" "}
          </FiPhoneCall>
        </div>
        <div className="col-sm-12 col-md-6">
          <Animated
            animationIn="bounceInUp"
            animationOut="bounceOutUp"
            animationInDuration={2500}
            animationOutDuration={2000}
            animateOnMount={false}
            isVisible={contactFormVisible}
          >
            <div className="form-description">
              <h2>Find us on</h2>
              <div className="row" id="form-icons">
                <AiOutlineInstagram
                  className="fa fa-instagram"
                  id="instagram-gradient"
                ></AiOutlineInstagram>
                <AiFillFacebook
                  className="fa fa-facebook"
                  id="facebook"
                ></AiFillFacebook>
                <AiFillGoogleSquare
                  className="fa fa-google"
                  id="google"
                ></AiFillGoogleSquare>
              </div>
              <div className="form-phone">
                <h2>Or</h2>
                <div className="phone-number">
                  <a href="+37379070302">
                    <h2>079-07-03-02</h2>
                  </a>
                </div>
              </div>
            </div>
          </Animated>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
