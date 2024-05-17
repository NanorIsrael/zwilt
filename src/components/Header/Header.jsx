import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Logo";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-white bg-[#525AA0] rounded-[15px] md:mx-[70px]">
      <section className="py-[1em] flex flex-col items-center justify-around lg:justify-between lg:flex-row lg:py-0">
        <div className="cursor-pointer w-full pl-8 lg:pl-[1.563em] lg:w-[8%] lg:">
          <Logo width={"112"} height={"27.35"} />
        </div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>
        <nav
          className={`${!open ? "hidden" : "flex"} w-full items-center font-[500] cursor-pointer lg:flex lg:w-[37%]`}
        >
          <ul className="capitalize flex text-[0.875rem] w-full flex-col items-center lg:flex-row lg:justify-between">
            <li className="py-[1.375em]"><a href={"#find-work"}>find work</a></li>
            <li className="py-[1.375em"><a href={"#find-talent"}>find talent</a></li>
            <li className="py-[1.375em]"><a href={"#articles"}>articles</a></li>
            <li className="py-[1.375em]"><a href={"#about-us"}>about us</a></li>
            <li className="py-[1.375em]"><a href={"#contact-us"}>contact us</a></li>
          </ul>
        </nav>
        <div
          className={`${!open ? "hidden" : "flex"} flex-col h-full w-[50%] justify-around font-[500] text-[0.875rem] lg:flex lg:flex-row lg:w-[15%]`}
        >
          <button className="capitalize py-2">login</button>
          <button className="bg-white rounded-[16px] text-black h-full capitalize py-2 w-full lg:w-fit lg:px-4">
            join now
          </button>
        </div>
      </section>
    </header>
  );
}
export default Header;
