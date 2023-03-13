import { useState, useEffect } from "react";
import styles from "../styles/styles";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary font-poppins w-full overflow-hidden text-dimWhite">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div
          className={` ${
            isSticky ? `fixed top-0 z-50 opacity-90 ` : "relative"
          } ${
            styles.boxWidth
          } bg-gray-900 w-full pt-1 flex justify-between items-center text-white navbar`}
        >
          <h1 className=" xs:ml-6 md:ml-16 ss:ml-16 font-bold font-sans text-xl text-white ">
            Enoch
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
                className="flex items-center cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md ml-4"
                href="https://drive.google.com/file/d/181f1Ncpc7-5p3L-cL8exwoMCNXTkJY23/view?usp=sharing"
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
                  <a
                    className="flex items-center cursor-pointer"
                    href="https://drive.google.com/file/d/181f1Ncpc7-5p3L-cL8exwoMCNXTkJY23/view?usp=sharing"
                  >
                    Resume
                    <MdFileDownload className="ml-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
