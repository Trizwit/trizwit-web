import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Clients = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container text-center px-5 mx-auto max-w-[1240px]">
        <h2 className="text-5xl font-bold text-indigo-500">Our Clients</h2>
        <div className="flex flex-col text-center w-full mb-20">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Carousel
                showArrows={false} // Show arrow navigation
                showThumbs={false} // Hide thumbnail navigation
                infiniteLoop={true} // Loop through the carousel
                autoPlay={true} // Auto-play the carousel
                interval={2000}
                showIndicators={false}
                showStatus={false}  // Time between slides (in milliseconds)
              >
                <div>
                  <img
                    className="max-h-48 max-w-48  object-contain"
                    src="zind.png"
                    alt="Zindot"
                  />
                </div>
                <div>
                  <img
                    className="max-h-48 max-w-48  object-contain"
                    src="fastn.png"
                    alt="Fastn"
                  />
                </div>
                <div>
                  <img
                    className="max-h-48 max-w-48  object-contain"
                    src="zerow.png"
                    alt="Zerowatt"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
