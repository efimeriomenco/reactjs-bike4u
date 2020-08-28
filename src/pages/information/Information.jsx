import "./information.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Animated } from "react-animated-css";
const Information = () => {
  return (
    <React.Fragment>
      <Animated animationIn="zoomIn" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
      <div className="container information">
        <div className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center information-map">
          <iframe width="500" height="400" frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Valea%20Crucii%2022+(BikeShop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
         <div className="information-text">
           <h2>&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit nobis possimus vero dolorum ipsa, illo qui maxime porro enim quos nihil, beatae ratione omnis. Maxime possimus nemo eveniet illum!</h2>
           <h2>&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit eos vel a quisquam consequatur quia ducimus cumque maxime magnam esse, dolore eligendi hic, animi officiis quam quod modi aut.</h2>
           <h2>&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut at tenetur, magni nemo dolor quia reiciendis! Assumenda atque adipisci laborum quo, tenetur sit unde, saepe tempore ea voluptatibus placeat?</h2>
           <h2>&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sint explicabo vel voluptatibus laboriosam vero. Magnam aliquid consequatur, tempore nobis minus voluptates incidunt nostrum iste excepturi assumenda molestiae, amet soluta?Earum, vero modi? Dignissimos nemo atque amet saepe voluptas corrupti magnam eveniet repellat similique quidem nulla ut inventore rerum fugiat consectetur hic, beatae perspiciatis quas est adipisci debitis pariatur fuga.</h2>
         </div>
        </div>
      </div>
      </Animated>
    </React.Fragment>
  );
};

export default Information;