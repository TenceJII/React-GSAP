import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "../../components/layout";
const Home = () => {
  ///jadi gsap itu tetap menyediakan gsap dia tidak masuk ke tailwind dia hanya menyediakan effect dan kita bisa memakai nya tailwind hanya css!!
  //current itu yang ngambil reff dari html tidak reff (null) null itu berati tidak dan nilai nya tetap null
  return (
    <Layout renderHeaderAndFooter={true} title="HOME">
      <section>
        <div className="max-w-3xl mx-auto ">halo</div>
      </section>
    </Layout>
  );
};
export default Home;
