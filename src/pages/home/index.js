import React, { useState, useEffect, useRef } from "react";
import { Form, Link } from "react-router-dom";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "../../components/layout";
import Header from "../../components/header";
import "../../assets/input.css";
import img1 from "../../assets/image/image1.png";
import bgwhite1 from "../../assets/image/bgwhite1.png";
import img2 from "../../assets/image/image2.png";
import img3 from "../../assets/image/image3.png";
import img4 from "../../assets/image/image4.png";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
const Home = () => {
  ///jadi gsap itu tetap menyediakan gsap dia tidak masuk ke tailwind dia hanya menyediakan effect dan kita bisa memakai nya tailwind hanya css!!
  //current itu yang ngambil reff dari html tidak reff (null) null itu berati tidak dan nilai nya tetap null
  const email = "your.email@example.com";
  const elementRef = useRef(null);

  // Gunakan useEffect untuk menjalankan animasi saat komponen dimuat
  useEffect(() => {
    // Registrasi plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Dapatkan elemen yang akan dianimasikan
    const text = elementRef.current;

    // Konfigurasi animasi menggunakan GSAP
    gsap.fromTo(
      text,
      { opacity: 0 }, // Atur opacity awal menjadi 0
      {
        opacity: 2, // Animasikan opacity menjadi 1 saat discroll
        scrollTrigger: {
          trigger: text, // Gunakan elemen tersebut sebagai trigger
          start: "top 80%", // Mulai animasi saat elemen berada di atas 80% layar
          end: "bottom 20%", // Selesaikan animasi saat elemen berada di bawah 20% layar
          scrub: true, // Efek animasi mengikuti scroll
        },
      }
    );
  }, []);
  const stickRef = useRef(null);

  useEffect(() => {
    const stick = stickRef.current;

    gsap.to(stick, {
      duration: 2,
      rotation: 360, // Rotasi sebanyak 360 derajat (1 putaran)
      ease: "linear", // Easing linear untuk rotasi yang konsisten
      onComplete: () => {
        gsap.set(stick, { rotation: 0 }); // Reset rotasi setelah animasi selesai
      },
    });
  }, []);

  const imgeffect2 = useRef(null);
  useEffect(() => {
    const img = imgeffect2.current;

    gsap.from(img, {
      duration: 0.5,
      x: 100, // Geser ke kiri sejauh 100 piksel
      opacity: 0, // Mulai dari opacity 0 (tidak terlihat)
      ease: "power3.out", // Easing untuk efek yang halus
      onComplete: () => {
        gsap.to(img, {
          duration: 1,
          x: 0, // Kembalikan ke posisi awal
          opacity: 1, // Tampilkan dengan opacity 1
          ease: "power3.out", // Easing untuk kembali ke posisi awal
        });
      },
    });
  }, []);

  const imgEffect = useRef(null);
  useEffect(() => {
    const img = imgEffect.current;

    gsap.from(img, {
      duration: 0.5,
      x: -100, // Geser ke kiri sejauh 100 piksel
      opacity: 0, // Mulai dari opacity 0 (tidak terlihat)
      ease: "power3.out", // Easing untuk efek yang halus
      onComplete: () => {
        gsap.to(img, {
          duration: 1,
          x: 0, // Kembalikan ke posisi awal
          opacity: 1, // Tampilkan dengan opacity 1
          ease: "power3.out", // Easing untuk kembali ke posisi awal
        });
      },
    });
  }, []);

  const [isTextReady, setIsTextReady] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const letters = text.textContent.split("");

      text.textContent = "";

      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0;
        text.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 1,
          delay: index * 0.1,
        });
      });

      setIsTextReady(true);
    }
  }, []);
  return (
    <Layout renderHeaderAndFooter={true} title="Home">
      <section className="relative p-2 mx-auto lg:p-0 lg:max-w-screen-lg ">
        <div className="relative flex flex-row items-center justify-center h-screen mx-auto gap-x-8 lg:gap-x-16 ">
          <div className="relative">
            <img
              className="w-40 rounded-lg md:w-[20rem]"
              alt=""
              src={img1}
            ></img>

            <div className="absolute inset-y-0 right-0 flex items-center justify-center text-white">
              <div className="relative">
                <img
                  src={bgwhite1}
                  alt=""
                  className="w-5 h-10 lg:w-10 lg:h-20"
                ></img>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black
                  "
                  className="absolute w-3 h-3 ml-2 transform -translate-x-1/2 -translate-y-1/2 lg:ml-3 lg:w-6 lg:h-6 top-1/2 left-1/2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative lg:text-left">
            <h1 className=" lg:text-4xl md:text-3xl font-medium font-kaisei lg:leading-loose font-ka tracking-[10px] trac ">
              MONALISA OF
              <span className="block"> MORALLES </span>
            </h1>
          </div>
          <div className="absolute top-[50%] transform -translate-y-1/2 right-[0.625rem]">
            <div className="inline-block w-1 border-r h-[15rem] border-black"></div>
          </div>
        </div>
      </section>
      <section className="lg:h-[100vh] overflow-hidden relative">
        <div className="container md:pb-0 max-w-full pb-4 px-10 pt-3 lg:pt-[9.625rem] ">
          <div className="grid-cols-12 gap-2 sm:grid">
            <div className="flex col-start-2 col-end-6 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>

              <h1 className="ml-3 font-serif text-lg ">MONALISA MORALES</h1>
            </div>
          </div>
          <div className="grid-cols-12 gap-2 sm:grid ">
            <div className="flex col-start-2 col-end-12 mb-9 lg:col-end-7">
              <h3 className="text-lg font-bold duration-1000 md:text-3xl ">
                <p>
                  <span className="block overflow-hidden ">
                    PORTOFOLIO CONTENT
                  </span>
                  <span className="block overflow-hidden">MORALLES</span>
                </p>
              </h3>
            </div>
            <div className="col-start-2 col-end-12 md:col-end-8 ">
              <p className="mb-10 text-base font-semibold md:mb-4">
                Hello 🖐🏻, this is my portfolio
                <br className="overflow-hidden md:block"></br> Contact me via
                Instagram or email below <br></br> when looking for a design /
                front end
              </p>
              <div className="relative flex items-center w-32 h-10 overflow-hidden duration-1000 gap-x-8 lg:w-52">
                <Link to="https://www.instagram.com/ninshu__/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </Link>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Link>
                <Link to="https://github.com/TenceJII" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </Link>
                <Link to="mailto:mahendramanik62@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[64.5vw] ml-auto lg:p-1 mt-8 duration-1000 top-0 right-0 h-full lg:absolute  lg:ml-0 lg:w-1/2 md:pb-0 ">
          <div className="relative h-full overflow-hidden lg:w-full aspect-[248/311]">
            <img
              className="absolute top-0 object-cover w-full h-full "
              src={img2}
              alt=""
            ></img>
          </div>
          <div className="absolute duration-1000  md:w-[21vw] md:left-[-10vw] md:top-[22.5vw] w-[41vw] -left-[22.7vw] top-[18vw] aspect-[156/203] z-10">
            <img
              className="absolute top-0 object-cover w-full"
              alt=""
              src={img3}
            ></img>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-6xl px-3 py-24 mx-auto ">
          <div className="relative w-full h-full ">
            <div className="flex items-end justify-center lg:flex-none">
              <div className="relative font-light text-[10.625vw] lg:text-[6.9vw] h-[2.6em] xl:pt-0 block ">
                <div className="block text-right lg:text-left leading-[0.84em]">
                  <div className="text-right lg:text-left">
                    <span className=" pr-[0.36em] lg:pr-0 font-[HVMuseRegular]">
                      EDUCATION
                    </span>
                    <span className="lg:w-[0.20em] lg:inline-block"></span>
                    <span className=" font-[HVMuseRegular] pr-[0.05em] lg:pr-0 lg:ml-0 ml-[-.05em]">
                      AND
                    </span>
                  </div>
                  <div className="relative text-left lg:text-right">
                    <span className="absolute lg:relative lg:top-0 lg:left-0 top-[0.92em]  inline-block font-[HVMuseRegular] ">
                      EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid mt-10 lg:mt-5 lg:grid-cols-3 md:grid-cols-2 gap-y-16 gap-x-12">
            <div className="relative flex flex-col items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img alt="" src=""></img>
              </div>
              <h2 className="mt-6 text-base font-semibold ">
                <Link to>
                  <span className="absolute z-20 rounded-lg "></span>
                  <span className="relative">ELEMENTARY SCHOLL</span>
                </Link>
              </h2>
              <p className="relative mt-2 text-sm font-medium">
                Go beyond infinity until you reach the limit to <br></br> move
                forward until you reach the limit
              </p>
            </div>
            <div className="relative flex flex-col items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img alt="" src=""></img>
              </div>
              <h2 className="mt-6 text-base font-semibold ">
                <Link to>
                  <span className="absolute z-20 rounded-lg "></span>
                  <span className="relative">MIDDLE SCHOLL</span>
                </Link>
              </h2>
              <p className="relative mt-2 text-sm font-medium">
                Go beyond infinity until you reach the limit to <br></br> move
                forward until you reach the limit
              </p>
            </div>
            <div className="relative flex flex-col items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md dark:bg-zinc-800 ">
                <img alt="" src=""></img>
              </div>
              <h2 className="mt-6 text-base font-semibold ">
                <Link to>
                  <span className="absolute z-20 rounded-lg "></span>
                  <span className="relative">HIGH SCHOLL</span>
                </Link>
              </h2>
              <p className="relative mt-2 text-sm font-medium">
                Go beyond infinity until you reach the limit to <br></br> move
                forward until you reach the limit
              </p>
            </div>
            <div className="relative flex flex-col items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md dark:bg-zinc-800 ">
                <img alt="" src=""></img>
              </div>
              <h2 className="mt-6 text-base font-semibold ">
                <Link to>
                  <span className="absolute z-20 rounded-lg "></span>
                  <span className="relative">UNIVERSITY</span>
                </Link>
              </h2>
              <p className="relative mt-2 text-sm font-medium">
                Go beyond infinity until you reach the limit to <br></br> move
                forward until you reach the limit
              </p>
            </div>
          </div>

          <div className="relative py-10 ">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-start-2 col-end-12">
                <div className="w-full  h-[1px] bg-[#401D01]"></div>
                <div className="flex items-center justify-center my-4">
                  <div className="flex text-[#401D01] tracking-widest font-[HVMuseRegular] text-[3.25vw]">
                    DESIGN / EDITTING
                  </div>
                  <div className="lg:h-[7.05em] lg:w-[10.1em] w-[6.1em]  relative">
                    <img
                      className="rounded-full"
                      src="https://images.unsplash.com/photo-1682659481243-a337e0dde6b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="w-full  h-[1px] bg-[#401D01]"></div>
                <div className="flex items-center justify-center my-4">
                  <div className="lg:h-[7.05em] lg:w-[10.1em] w-[6.1em]  relative">
                    <img className="rounded-full" src={img4} alt=""></img>
                  </div>
                  <div className="flex text-[#401D01] tracking-widest font-[HVMuseRegular] text-[3.25vw]">
                    VISUAL STUDIO CODE
                  </div>
                </div>

                <div className="w-full  h-[1px] bg-[#401D01]"></div>
                <div className="flex items-center justify-center my-4">
                  <div className="flex text-[#401D01] tracking-widest font-[HVMuseRegular] text-[3.25vw]">
                    DESIGN UI/UX
                  </div>
                  <div className="lg:h-[7.05em] lg:w-[10.1em] w-[6.1em]  relative">
                    <img
                      className="rounded-full"
                      src="https://basco1989.com/wp-content/themes/mytheme/assets/images/top/history/01.jpg"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="w-full  h-[1px] bg-[#401D01]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </Layout>
  );
};
export default Home;
