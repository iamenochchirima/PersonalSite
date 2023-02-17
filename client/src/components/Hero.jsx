import Image from "next/image";
import Enoch from "../../public/Enoch.png";
import styles from "@/styles/styles";
import myimage from "../../public/myimage.png";
import deved from "../../public/dev-ed-wave.png";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >

        <h1 className="font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[100.8px] leading-[20px] w-full">
          Welcome!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src={Enoch}
          alt="Enoch"
          className="w-[80] h-[80] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
    // <section
    //   id="home"
    //   className={`flex md:flex-grow flex-col ${styles.paddingY}`}
    // >
    //   <div
    //     className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    //   >
    //     <h2 className="text-teal-600 text-5xl font-medium">Welcome!</h2>
    //     <h3 className="text-2xl py-2">Software Developer</h3>
    //     <p className="text-md py-5">
    //       "Welcome to my portfolio! As a full-stack software developer, I
    //       specialize in creating intuitive and functional web applications that
    //       solve real-world problems. With expertise in both front-end and
    //       back-end development, I have the flexibility to take on a wide range
    //       of projects, from designing responsive user interfaces to building
    //       powerful APIs. Whether you're looking for a freelance developer or
    //       seeking to hire a full-time team member, I'm here to help. Take a look
    //       at my work and let's chat about how I can bring my skills and
    //       experience to your next project!"
    //     </p>
    //   </div>
    //   <div className="">
    //     <div className="relative mx-auto bg-gradient-to-b mb-10 from-teal-500 w-80 h-80 rounded-lg">
    //       <Image src={Enoch} alt="Enoch" className="w-[100%] h-[100%] relative z-[5]" />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;

{
  /* <div className=" text-5xl">
<AiFillLinkedin />
<AiFillTwitterCircle />
<RiWhatsappFill />
</div> */
}
