import React, { useState } from "react";
import "./Carousel.css";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
const MAX_VISIBILITY = 2; 
export const Carousel = ({ components, activeIndex, setActiveIndex}) => {
  const count = components.length;
  const isMobile=useMediaQuery({maxWidth:768});
  return (
    <div >
       {isMobile ? (
        <div className="mobile-carousel">
          {components.map((Component, i) => (
            <div key={i} className="card2 mb-3">
              <Component />
            </div>
          ))}
        </div>
        ):(  
          < div className="carousel">
      {activeIndex > 0 && (
        <button
          className="nav left"
          onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {components.map((Component, i) => (
        <div
          key={i}
          className="card-container"
          style={{
            "--active": i === activeIndex ? 1 : 0,
            "--offset": (i - activeIndex) / 3,
            "--abs-offset": Math.abs(i - activeIndex) / 3,
            "--direction": Math.sign(i - activeIndex),
            "--opacity": Math.abs(i - activeIndex) >= MAX_VISIBILITY ? 0 : 1,
            "--display":
              Math.abs(i - activeIndex) > MAX_VISIBILITY ? "none" : "block",
            }}>
          <Component/>
        </div>
      ))}
      {activeIndex < count - 1 && (
        <button
        className="nav right"
        onClick={()=>{setActiveIndex((i) => Math.min(i + 1, count - 1))}}>
          <TiChevronRightOutline />
        </button>
      )}
      </div>)}
    </div>
  );
};
