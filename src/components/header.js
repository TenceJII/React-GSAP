import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Header = () => {
  const [Isopen, SetIsOpen] = useState(false);
  const handlenavbar = (val) => {};

  return (
    <aside className="fixed top-0 left-0 z-20 hidden h-full text-black transition duration-300 border-r border-black lg:block sm:hidden">
      <div className="relative flex flex-col items-center justify-end w-20 h-full p-0 pb-0">
        <div className="absolute top-8">
          <div className="">
            <div className="[writing-mode:vertical-lr] block relative font-bold tracking-[-.5rem] text-xl hover:drop-shadow-lg [text-orientation:upright]">
              CATALOG
            </div>
          </div>
        </div>
        <div className="mt-[1.05rem] flex">
          <ul className="block p-0 m-0">
            <li>
              <Link
                href=""
                className="inline-grid tracking-[-.43rem] items-center px-6 my-[1.30rem] text-sm font-semibold"
              >
                <span className="[writing-mode:vertical-lr] [text-orientation:upright]">
                  TOP
                </span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="inline-grid tracking-[-.43rem] items-center px-6 my-[1.30rem] text-sm font-semibold"
              >
                <span className="[writing-mode:vertical-lr] [text-orientation:upright]">
                  BACKGROUND
                </span>
              </Link>
            </li>
            <li>
              <button
                onclick={handlenavbar}
                href=""
                className="inline-grid relative tracking-[-.43rem] items-center px-6 my-[1.30rem] text-sm font-semibold"
              >
                <span className="[writing-mode:vertical-lr] [text-orientation:upright]">
                  CONTENTS
                </span>
                <ul
                  id="Content"
                  className="min-w-[10rem] max-w-md hidden absolute top-4 left-16 z-10 pt-0 pb-0"
                >
                  <li className="pt-4 ml-4 bg-[#fff1da] border-t border-l border-r border-black">
                    <Link
                      href="https://tencejii.github.io/#"
                      target="_blank"
                      className="inline-grid tracking-widest items-center px-12 py-[0.7rem] hover:text-slate-50 w-full text-sm leading-6 font-[GlassAntiqua]"
                    >
                      PROJECT
                    </Link>
                  </li>
                  <li className="pb-4 ml-4 bg-[#fff1da] border-b border-l border-r border-black">
                    <Link
                      href=""
                      className="inline-grid items-center px-12 py-[0.7rem] hover:text-slate-50 w-full text-sm leading-6 tracking-widest font-[GlassAntiqua]"
                    >
                      PROJECT
                    </Link>
                  </li>
                </ul>
              </button>
            </li>
            <li>
              <Link
                href=""
                className="inline-grid tracking-[-.43rem] items-center px-6 my-[1.30rem] text-sm font-semibold"
              >
                <span className="[writing-mode:vertical-lr] [text-orientation:upright]">
                  FOOTER
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-1 mb-5">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default Header;
