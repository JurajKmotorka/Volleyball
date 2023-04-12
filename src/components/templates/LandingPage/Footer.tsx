import { useParallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
export const Footer = () => {
  const isMdScreen = useMediaQuery({ minWidth: 1000 });
  const parallax = useParallax<HTMLDivElement>({
    // translateY: isMdScreen ? [150, 0, "easeOutQuint"] : [0, 0, "easeOutQuint"],
  });
  return (
    <section className=" mt-16 w-full bg-[url('/court-bottom-1.png')] bg-cover">
      <div ref={parallax.ref} className=" relative w-full">
        <Image
          src="/court-ball-1.png"
          id="footer"
          alt="ball"
          width={2400}
          height={1000}
        />
        <a
          className="absolute left-[27%] top-[22%] h-[17%] w-[20%]"
          href="https://www.thescarabeus.eu/"
          target="_blank"
        />

        {/* <div className=" absolute top-[25%] w-full p-2 font-semibold text-base md:top-[0%] md:p-8 md:text-xl lg:top-[10%]  lg:text-2xl xl:top-[15%] xl:p-12 xl:text-5xl 2xl:top-[18%] ">
          Podporili nás
        </div> */}
      </div>
    </section>
  );
};
