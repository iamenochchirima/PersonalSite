import { useState, useEffect, useRef } from "react";
import styles from "../styles/styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = ({ scrollToSection, projects, skills, about, contact }) => {
  const [toggle, settoggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust this threshold as needed
      const scrollThreshold = 100;

      if (scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isSticky)


  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);


  console.log(scrollDirection)


  return (
    <div className="bg-primary font-poppins w-full overflow-hidden text-dimWhite">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div
          className={` ${scrollDirection === "up" ? `fixed top-0 z-50` : "relative"
            } ${styles.boxWidth
            } bg-primary w-full pt-1 flex justify-between items-center text-white navbar`}
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
              <button onClick={() => scrollToSection(projects)}>Projects </button>
            </li>
            <li
              className={`font-normal hover:underline cursor-pointer text-[16px] mr-10`}
            >
              <button onClick={() => scrollToSection(skills)}>Skills</button>
            </li>
            <li
              className={`font-normal hover:underline cursor-pointer text-[16px] mr-10`}
            >
              <button onClick={() => scrollToSection(about)}>About me</button>
            </li>
            <li
              className={`font-normal hover:underline cursor-pointer text-[16px] mr-10`}
            >
              <button className="py-1.5 px-2 rounded-lg bg-blue-500" onClick={() => scrollToSection(contact)}>Contact me</button>
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
                      <button onClick={() => scrollToSection(projects)}>Projects </button>
                    </li>
                    <li
                      className={`font-normal cursor-pointer text-[16px] mb-4`}
                    >
                      <button onClick={() => scrollToSection(skills)}>Skills</button>
                    </li>
                    <li
                      className={`font-normal cursor-pointer text-[16px] mb-4`}
                    >
                      <button className="py-1.5 px-2 rounded-lg bg-blue-500" onClick={() => scrollToSection(contact)}>Contact </button>
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
