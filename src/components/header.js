import React, { useState } from "react";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFlexCol, setIsFlexCol] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsFullScreen(!isFullScreen);
    setIsFlexCol(!isFlexCol);

    TweenMax.to(".menu-items", 0.5, {
      height: isMenuOpen ? 0 : "auto",
      opacity: isMenuOpen ? 0 : 1,
      ease: Power3.easeInOut,
    });
  };

  return (
    <header
      className={`fixed top-0 z-20 flex ${
        isFlexCol ? "flex-col" : "flex-row"
      } items-center justify-between w-full px-2 py-6 bg-white xl:px-16 ${
        isFullScreen ? "h-screen" : ""
      }`}
    >
      <div className="text-lg font-bold tracking-[4px] lg:tracking-[1rem]">
        ABOUT ME
      </div>

      <div className={`lg:block   ${isFullScreen ? "block" : "hidden"}`}>
        <ul
          className={`flex menu-items ${
            isMenuOpen ? "flex-col" : "flex-row"
          } gap-x-5 lg:tracking-[9px] text-base font-bold font-serif`}
        >
          <Link className="hover:underline underline-offset-2">CONTENT</Link>
          <Link className="hover:underline underline-offset-2">PROJECT</Link>
          <Link className="hover:underline underline-offset-2">SKILLS</Link>
          <Link className="hover:underline underline-offset-2">FOOTER</Link>
        </ul>
      </div>

      <Link
        className="text-lg font-bold lg:block tracking-[4px] lg:tracking-[1rem]"
        onClick={handleClickMenu}
      >
        MENU
      </Link>
      {isMenuOpen && (
        <>
          <div className="absolute top-[50%] transform -translate-y-1/2 lg:right-[25.625rem] right-[0.625rem]">
            <div className="inline-block w-1 border-r h-[15rem] border-black"></div>
          </div>
          <div className="absolute top-[50%] transform -translate-y-1/2 lg:left-[23.625rem] left-[0.625rem]">
            <div className="inline-block w-1 border-r h-[15rem] border-black"></div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
