import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navigation = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <h1 className="text-xl font-bold ">Enoch Chirima</h1>
      <ul className="list-none flex-1 items-center sm:flex hidden justify-end ">
        <li className={`font-normal cursor-pointer text-[16px] mr-10`}>
          <a href="">Home</a>
        </li>
        <li className={`font-normal cursor-pointer text-[16px] mr-10`}>
          <a href="">Contact</a>
        </li>
        <li className={`font-normal cursor-pointer text-[16px] mr-10`}>
          <a href="">Blog </a>
        </li>
        <li>
          <a
            className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-2 rounded-md ml-4"
            href=""
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <button className="text-3xl object-contain" onClick={() => settoggle((prev) => !prev)}>
          {toggle ? <IoCloseSharp /> : <AiOutlineMenu />}
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 mb-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-1 items-center flex-col justify-end ">
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a href="">Home</a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a href="">Contact</a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a href="">Blog </a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a href="">Download CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;