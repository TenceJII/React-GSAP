import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "../../components/layout";
const Home = () => {
  ///jadi gsap itu tetap menyediakan gsap dia tidak masuk ke tailwind dia hanya menyediakan effect dan kita bisa memakai nya tailwind hanya css!!
  //current itu yang ngambil reff dari html tidak reff (null) null itu berati tidak dan nilai nya tetap null
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const tl = gsap.timeline({
      repeat: -1, // Mengulang animasi tanpa batas
      yoyo: true, // Mengulang animasi mundur
    });

    // Animasi pergeseran gambar
    tl.to(imageElement, {
      x: 100, // Pergeseran horizontal
      duration: 2, // Durasi animasi (dalam detik)
      ease: "power1.inOut", // Fungsi easing untuk animasi yang mulus
    });

    return () => {
      // Membersihkan animasi saat komponen dilepas
      tl.kill();
    };
  }, []);
  return (
    <Layout renderHeaderAndFooter={true} title="HOME">
      <body className="dark:bg-[#F9F4EC]">
        <section className="mx-auto md:max-w-[1256px] pt-[5.75rem] pb-[4.1875rem] max-w-[20rem] lg:pb-[1.375rem] md:w-[85%] relative">
          <div className="relative justify-between mx-auto md:flex-row-reverse md:items-center md:flex">
            <div className="left-0 right-auto ml-2 m-auto bottom-[-19.125rem] md:bottom-[13.125rem] lg:bottom-[16.25rem] absolute">
              <h2 className="relative z-10 ml-0 font-light leading-6 tracking-widest md:text-5xl md:text-white text-2xl lg:text-[5rem] font-[GlassAntiqua]">
                THIS IS DAILY MY <br className="hidden" />
                <span className="">LIFE</span>
              </h2>
            </div>
            <div className="md:w-[49.3%]">
              <h2 className="m-0 mt-0 mb-8 text-[1.60rem] font-[BebasNeue] lg:text-4xl tracking-widest text-left">
                ABOUT ME I'M MONALISA MORRALES
              </h2>
              <div className="max-w-[38.625rem]">
                <div className="relative block p-0 m-0">
                  <div className="xl:w-[618px] lg:w-[435px] relative w-[314px] lg:float-left mx-auto min-h-[1px] block h-full top-0 left-0">
                    <img
                      src="https://images.microcms-assets.io/assets/9379de54d41d4225aa6b33a5424667ec/a721e60c2ba14c5ab8ea42bc32ca3fd8/%E6%B0%B8%E9%81%A0%E3%81%AE%E5%B9%B8%E3%81%9B.jpg?compress=auto,format&h=1000"
                      className="block w-full max-w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-[18.4375rem] max-w-[32.125rem] w-[47%] overflow-hidden">
              <div className="relative hidden md:block">
                <div className="xl:w-[514px] lg:w-[400px] w-[314px] relative top-0 left-0 float-left h-full">
                  <img
                    src="https://images.microcms-assets.io/assets/9379de54d41d4225aa6b33a5424667ec/aa98a5e5d4f2497c9bdc972e9c38827c/%E5%A4%A7%E6%AD%A3%E3%83%AD%E3%83%9E%E3%83%B3.jpg?compress=auto,format&h=1000"
                    className="block w-full max-w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-[8.5625rem] right-[1.5625rem]">
              <div className="absolute inline-block w-1 border-r right-[0.625rem] h-[15rem] border-black"></div>
            </div>
          </div>
          <div className="md:-mt-[85px] duration-300 mt-[21.875rem] lg:pl-14">
            <p className="text-lg tracking-wide leading-9 font-[VinaSans]">
              I created this portfolio with <br />
              the aim of introducing myself and <br />
              to help inspire your portfolio design
            </p>
          </div>
        </section>
      </body>
    </Layout>
  );
};
export default Home;
