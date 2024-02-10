import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "../../components/layout";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, { duration: 1, x: 100, y: 100 });
  }, []);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 1, x: 100, y: 100 });
  }, []);

  const textRef = useRef(null);

  useEffect(() => {
    // Mendapatkan teks dari referensi
    const text = textRef.current;

    // Split teks menjadi huruf-huruf individual
    const letters = text.textContent.split("");

    // Kosongkan konten teks
    text.textContent = "";

    // Loop melalui setiap huruf dan wrap dengan span untuk animasi
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      text.appendChild(span);

      // Animasi reveal menggunakan GSAP
      gsap.to(span, {
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        x: 100,
      });
    });
  }, []);
  ///jadi gsap itu tetap menyediakan gsap dia tidak masuk ke tailwind dia hanya menyediakan effect dan kita bisa memakai nya tailwind hanya css!!
  //current itu yang ngambil reff dari html tidak reff (null) null itu berati tidak dan nilai nya tetap null
  return (
    <Layout renderHeaderAndFooter={true} title="HOME">
      <section>
        <div className="w-20 h-20 bg-blue-500" ref={elementRef}>
          halo
        </div>
        <div ref={textRef} className="text-4xl font-bold text-center">
          Hello, GSAP Text Reveal Animation!
        </div>
      </section>
    </Layout>
  );
};
export default Home;
