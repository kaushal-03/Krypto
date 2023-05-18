import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousele = () => {
  return (
    <Carousel 
    infiniteLoop
    autoPlay
    showStatus={false}
    showArrows= {false}
    interval={1000}
    showThumbs={false}
    showIndicators={false}
    >
      <div>
        <img src="https://ktdonline.com/wp-content/uploads/2017/01/Managed-IT_iStock-578822126.jpg" />
      </div>
      <div>
        <img src="https://symbioticconsultinggroup.com/Images/Our-Services2.jpg" />
      </div>
    </Carousel>
  );
};

export default Carousele;