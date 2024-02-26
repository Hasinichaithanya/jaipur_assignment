import "./home.css";
import Header from "../Header/Header";

import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-bottom-container">
        <h3 className="greeting">Hi! Tushar</h3>
        <div className="images-container">
          <img
            className="carousel-image"
            src="https://th.bing.com/th/id/OIP.q5SZYmm-oiQm-EFns-sljQHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />

          <img
            className="carousel-image"
            src="https://th.bing.com/th/id/OIP.BK3p8Qg4qn_HacIDxXqdFAAAAA?w=273&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />

          <img
            className="carousel-image"
            src="https://th.bing.com/th/id/OIP.rnHsXZsRkXX--Ln0hTZJyQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />
        </div>

        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={80}
            naturalSlideHeight={45}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <img
                  className="carousel-image"
                  src="https://th.bing.com/th/id/OIP.q5SZYmm-oiQm-EFns-sljQHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt=""
                />
              </Slide>
              <Slide index={1}>
                <img
                  className="carousel-image"
                  src="https://th.bing.com/th/id/OIP.BK3p8Qg4qn_HacIDxXqdFAAAAA?w=273&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt=""
                />
              </Slide>
              <Slide index={2}>
                <img
                  className="carousel-image"
                  src="https://th.bing.com/th/id/OIP.rnHsXZsRkXX--Ln0hTZJyQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt=""
                />
              </Slide>
            </Slider>
            <div className="carousel-btns-container">
              <ButtonBack className="carousel-btn">.</ButtonBack>
              <ButtonNext className="carousel-btn">.</ButtonNext>
            </div>
          </CarouselProvider>
        </div>
        <h3 style={{ textAlign: "left" }}>What's New</h3>
        <div className="new-image-container">
          <img
            src="https://th.bing.com/th/id/OIP.EFF61WNWIoOsGILSMZfQEwHaEc?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            className="new-image"
          />
          <span className="new">New</span>
        </div>
        <p className="bottom-line">What do you want to learn today Tushar?</p>
      </div>
    </div>
  );
}

export default Home;
