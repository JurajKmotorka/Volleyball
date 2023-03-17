import Image from "next/image";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const AnimatedButton = ({
  name,
  buttonRef,
}: {
  name: string;
  buttonRef: string;
}) => {
  return (
    <Link
      href={buttonRef}
      className="group relative inline-flex min-w-[6rem] items-center justify-start overflow-hidden rounded-lg px-3 py-2 font-semibold leading-none"
    >
      <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
      <span className="relative w-full text-center text-base transition-colors duration-500 ease-in-out group-hover:text-[#130922] xl:text-xl">
        {name}
      </span>
      <span className="absolute inset-0 rounded-lg "></span>
    </Link>
  );
};

export const Header = () => {
  return (
    <>
      <div className="flex items-center text-base">
        <Image
          className=" md:w-26 2xl:w-30 mr-4 w-12 sm:w-16 lg:w-28 xl:mr-6 "
          priority
          src="/favicon.png"
          alt="Logo"
          height={140}
          width={140}
        />
        <div className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
          Volejbalový Klub <br /> Topoľčany
        </div>
        <FiMenu className="ml-auto text-3xl md:hidden" />
        <div className="hover:bg ml-auto hidden gap-x-8  md:flex md:text-xl  xl:gap-x-14 ">
          <AnimatedButton name="Domov" buttonRef="/" />

          <AnimatedButton name="Rezervácie" buttonRef="/reservation" />

          <AnimatedButton name="O nás" buttonRef="/about" />

          <AnimatedButton name="Kontakt" buttonRef="contact" />
        </div>
      </div>
    </>
  );
};
