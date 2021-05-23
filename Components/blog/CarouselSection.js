import React, { useState } from "react";

const CarouselSection = () => {
  const [carouselValues, setCarouselValues] = useState([
    { value: 1, src:"../static/png/maskgroup3x.png"},
    { value: 2, src:"../static/png/maskgroup3x.png"},
    { value: 3, src:"../static/png/maskgroup3x.png"},
    { value: 4, src:"../static/png/maskgroup3x.png"},
    { value: 5, src:"../static/png/maskgroup3x.png"},
  ]);
  const carouselItem = ()=>{
      return carouselValues.map((item, index) => {
        return (
          <div 
          key={index}
          className="carousel-item"
          className={`${
            item.value==1 ? "active " : ""
          }carousel-item`}
          >
          <img
            src={item.src}
            alt="Los Angeles"
            width="1100"
            height="500"
          />
          <div class="carousel-inner-item col-md-10 offset-md-1 ">
          <h1>News Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim 
              </p>
              <p>
                enim ad minim veniam, quis nostrud exercitation ullamco laboris enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <button type="button" class="btn btn-light">Learn more</button>
          </div>
        </div>);
      });   
  }
  return (
    <div id="demo" className="carousel-section">
    <div className="row">
      <div className="col-md-4 carouselTop">
    <h1>iPurvey Blogs</h1>
        </div>
      </div>
      <div className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#" data-slide-to="0" className="active"></li>
          <li data-target="#" data-slide-to="1"></li>
          <li data-target="#" data-slide-to="2"></li>
          <li data-target="#" data-slide-to="3"></li>
          <li data-target="#" data-slide-to="4"></li>
        </ul>
        <div className="carousel-inner">
        {carouselItem()}
        </div>

        <a className="carousel-control-prev" href="#" data-slide="prev">
         
        </a>
        <a className="carousel-control-next" href="#" data-slide="next">
          
        </a>
      </div>
    </div>
  );
};

export default CarouselSection;
