import { Parallax, useParallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export const About = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });
  const parallax = useParallax<HTMLDivElement>({
    translateX: isMdScreen ? [-40, 0, "easeOutQuint"] : [0, 0, "easeOutQuint"],
  });

  return (
    <section className=" mt-10 h-[200vh] overflow-hidden p-10  md:mt-20 md:px-[15vw]">
      <div className=" flex items-center justify-between p-2 max-md:flex-col-reverse  md:p-8 xl:p-12  ">
        <div
          ref={parallax.ref}
          className="relative max-w-[52rem] max-md:pb-4 md:w-[40vw] md:gap-2"
        >
          <div className=" h-full w-full">
            <Image
              src="/parallax-background.jpg"
              alt="playing field"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute -top-0 left-0 h-full w-full">
            <Parallax speed={6}>
              <Image
                src="/parallax-middle.png"
                alt="middle player"
                width={1000}
                height={1000}
              />
            </Parallax>
          </div>
          <div className="absolute top-0 left-0 h-full w-full">
            <Parallax speed={12}>
              <Image
                src="/parallax-foreground.png"
                alt="front player"
                width={1000}
                height={1000}
              />
            </Parallax>
          </div>
        </div>
        <div className=" max-md:pb-4 md:w-[30%]">
          <h2 className="pb-4 text-3xl font-semibold xl:text-4xl">Nadpis</h2>
          <p className="xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum dolor, asperiores repudiandae
          </p>
        </div>
      </div>
    </section>
  );
};
