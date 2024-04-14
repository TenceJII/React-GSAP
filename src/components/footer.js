import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import img2 from "../../src/assets/image/image2.png";
import Slider from "react-slick";
import { gsap } from "gsap";
import img5 from "../../src/assets/image/image5.png";

function Footer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Lebar layar lg (1024px)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Lebar layar sm (600px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <footer className="relative max-w-screen-xl px-3 pb-3 mx-auto ">
      <div className="flex items-end justify-between w-full py-9">
        <h1 className="text-2xl font-medium tracking-wide font-kaisei lg:text-5xl">
          <div>MORALES</div>
          <div>ILUSTRATION</div>
          <div className="text-right">SPONSORS</div>
        </h1>
        <div className="flex text-xs gap-x-1">
          <Link className="text-gray-400 hover:text-black">
            <h1>JOIN</h1>
          </Link>
          <span>/</span>
          <Link className="hover:text-gray-400">
            <h1>ORDER</h1>
          </Link>
        </div>
      </div>
      <Slider {...settings} className="inline-flex gap-x-10">
        <div className="w-full h-full p-2">
          <img className="w-auto h-full" src={img5} />
        </div>
        <div className="w-full h-full p-2">
          <img
            className="w-auto h-full"
            src="https://images.unsplash.com/photo-1452022449339-59005948ec5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide2"
          />
        </div>
        <div className="w-full h-full p-2">
          <img
            className="w-auto h-full"
            src="https://images.unsplash.com/photo-1617862516441-a9a5cf5284c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide3"
          />
        </div>
      </Slider>
    </footer>
  );
}
export default Footer;
