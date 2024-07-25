import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, ava, menu, close } from "../assets";
import { SectionObserver } from "../hoc";

const Navbar = () => {
  const sections = navLinks.map((link) => link.id);
  const activeSection = SectionObserver(sections);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setActive(activeSection);
  }, [activeSection]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 glassmorphism`}
    >
      <div className="w-full flex justify-between 
      items-center max-w-7xl mx-auto">
        <Link 
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={ava} alt="ava" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Huy &nbsp;<span className="sm:block hidden">TRINH</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                link.id === activeSection
                  ? "text-white border-b-2 border-[#804dee]"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>))
          }
          <button className="glassmorphism btn-primary text-secondary hover:text-white">Download CV</button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                  active === link.id
                  ? "text-white"
                  : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>))
              }
              <button>Download CV</button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar