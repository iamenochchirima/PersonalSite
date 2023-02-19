import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import Link from 'next/link'

const Navigation = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="bg-slate-900 w-full pt-1 fixed flex justify-between items-center navbar">
      <h1 className="text-gradient xs:ml-6 md:ml-16 ss:ml-16 font-bold text-xl ">
        Enoch Chirima
      </h1>
      <ul className="list-none mr-20 flex-1 items-center sm:flex hidden justify-end m-4">
        <li
          className={`font-normal hover:underline cursor-pointer text-[16px] mr-10`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`font-normal hover:underline cursor-pointer text-[16px] mr-10`}
        >
          <a href="#">Blog </a>
        </li>
        <li className="">
          <a
            className="flex items-center cursor-pointer bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-400 text-white px-4 py-2 rounded-md ml-4"
            href="/Resume.pdf"
          >
            Resume
            <MdFileDownload className="ml-2" />
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex py-4 pr-3 pl-1 flex-1 justify-end items-center ">
        <button
          className="text-3xl mr-3 object-contain"
          onClick={() => settoggle((prev) => !prev)}
        >
          {toggle ? <IoCloseSharp /> : <AiOutlineMenu />}
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 mb-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-1 items-center flex-col justify-end ">
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
            <Link href="/">Home</Link>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a href="">Blog </a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-4`}>
              <a className="flex items-center cursor-pointer" href="/Resume.pdf">Resume
            <MdFileDownload className="ml-2" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
