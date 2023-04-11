import { useState, useEffect } from "react";
import styles from "../styles/styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
            isSticky ? `fixed  bg-gray-900 top-0 z-50 opacity-90 ` : "relative bg-black"
          } ${
            styles.boxWidth
          } w-full pt-1 flex justify-between items-center text-white navbar`}
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
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1bOPxePae0rHWYIRxsZOGAKe4XhzhUBrr/view?usp=share_link"
              >
                Resume
                <MdFileDownload className="ml-2" />
              </a>
            </li>
          </ul>

          <div className="sm:hidden flex py-4 pr-3 pl-1 flex-1 justify-end items-center ">
            <button
              className="text-3xl mr-3 object-contain"
              onClick={() => settoggle(true)}
            >
              <AiOutlineMenu />
            </button>
            {toggle && (
              <div
                className={` fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-70`}
              >
                <div className="absolute top-0 right-0 z-10 min-w-[200px] bg-gray-800 px-5">
                  <button className="text-xl pb-5 pt-3" onClick={() => settoggle(false)}>
                    <AiOutlineClose />
                  </button>
                  <ul className="list-none flex-1 items-center flex-col justify-end ">
                    <li
                      className={`font-normal cursor-pointer text-[16px] mb-4`}
                    >
                      <Link href="/">Home</Link>
                    </li>
                    <li
                      className={`font-normal cursor-pointer text-[16px] mb-4`}
                    >
                      <a href="">Blog </a>
                    </li>
                    <li
                      className={`font-normal cursor-pointer text-[16px] mb-4`}
                    >
                      <a
                        className="flex items-center cursor-pointer"
                        target="_blank"
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1bOPxePae0rHWYIRxsZOGAKe4XhzhUBrr/view?usp=share_link"
                      >
                        Resume
                        <MdFileDownload className="ml-2" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
