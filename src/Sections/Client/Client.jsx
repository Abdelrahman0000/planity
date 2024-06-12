import Img from "../../assets/testi.png";
import "./Client.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules"; // Import Swiper styles
import "swiper/css";
const testimonials = [
  {
    quote:
      "My home became cooler and calmer by adding many beautiful photos and being very comfortable to look at.",
    name: "Sila Marsilih",
    occupation: "Artist",
  },
  {
    quote:
      "My home became cooler and calmer by adding many beautiful photos and being very comfortable to look at.",
    name: "Sila Marsilih",
    occupation: "Artist",
  },
];
export default function Client() {
  return (
    <div className="Client ">
      <div className="flex-sm-row d-flex flex-column-reverse justify-content-between align-items-center Client-inner">
        <div className="right">
          <h3 className="fs-1">
            {`" Testimonial `} <br />
            {`highlight "`}
          </h3>
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <p className="quote">{testimonial.quote}</p>
                  <h5 className="name">{testimonial.name}</h5>
                  <p className="occupation">{testimonial.occupation}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="left">
          <div className="image">
            <img src={Img} alt="Monsera Plant" />
          </div>
        </div>
      </div>
    </div>
  );
}
