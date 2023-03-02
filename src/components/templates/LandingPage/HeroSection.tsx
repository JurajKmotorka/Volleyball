import Image from "next/image";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

const AnimatedButton = ({ name }: { name: string }) => {
  return (
    <a
      href="#_"
      className="group relative inline-flex min-w-[6rem] items-center justify-start overflow-hidden rounded-lg px-3 py-2 font-semibold leading-none"
    >
      <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
      <span className="relative w-full text-center text-base transition-colors duration-500 ease-in-out group-hover:text-[#130922] xl:text-xl">
        {name}
      </span>
      <span className="absolute inset-0 rounded-lg "></span>
    </a>
  );
};
export const HeroSection = () => {
  return (
    <section>
      <div className="relative mx-auto flex  h-[65vh] max-h-[80rem]  flex-col items-center   bg-[url('/hero-background.jpg')] md:h-[100vh]   lg:items-start">
        <div className="w-full p-2 md:p-8 xl:p-12 ">
          <div className="flex items-center text-base">
            <Image
              className=" md:w-26 mr-4 w-12 lg:w-20 xl:mr-6 2xl:w-24 "
              priority
              src="/favicon.png"
              height={96}
              width={96}
              alt="Logo"
            />
            <div className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              Volejbalový Klub <br /> Topoľčany
            </div>
            <FiMenu className="ml-auto text-3xl md:hidden" />
            <div className="hover:bg ml-auto hidden gap-x-8  md:flex md:text-xl  xl:gap-x-14 ">
              <AnimatedButton name="Galéria" />
              <AnimatedButton name="O nás" />
              <AnimatedButton name="Kontakt" />
            </div>
          </div>
          <div className="  flex flex-col-reverse items-center  text-base  md:flex-row">
            <div className=" absolute flex w-[30vw] basis-1 justify-around text-2xl max-md:-translate-y-[2.5rem] md:h-[20vh] md:flex-col   xl:h-[12vh]  2xl:text-3xl">
              <CiFacebook className="transition duration-300 ease-in-out hover:scale-110" />
              <CiInstagram className="transition duration-300 ease-in-out hover:scale-110 " />
            </div>
            <div className="   my-[15vh] text-[3rem] leading-tight sm:text-[4rem] md:my-[20vh]   md:px-[15vw]  md:text-[6rem] lg:my-[15vh] lg:text-[8rem] xl:text-[9rem]  2xl:text-[10rem]">
              <div>Placeholder</div>
              <div>Text</div>
            </div>
          </div>
        </div>
        <Image
          className=" absolute bottom-0 w-full"
          priority
          src="/background-geometric.svg"
          height={200}
          width={2400}
          alt="Geometric-pattern"
        />
      </div>
    </section>
  );
};
