import { Parallax, useParallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";

export const JoinUs = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });
  const parallax = useParallax<HTMLDivElement>({
    translateX: isMdScreen ? [-40, 0, "easeOutQuint"] : [0, 0, "easeOutQuint"],
  });

  return (
    <section className=" mt-10  mb-[-2.5rem] overflow-hidden p-10 md:mb-[-5rem] md:mt-20 md:px-[15vw]">
      <div className=" flex items-center justify-between max-md:flex-col-reverse sm:p-2  md:p-8 xl:p-12  ">
        <div
          ref={parallax.ref}
          className="relative max-w-[52rem] max-md:pb-4 max-sm:w-[72vw] md:w-[40vw] md:gap-2"
        >
          <div className=" h-full w-full max-sm:w-[72vw]">
            <Image
              src="/parallax-background.jpg"
              alt="playing field"
              width={1000}
              height={1000}
            />
          </div>
          <div className=" absolute -top-0 left-0 h-full w-full max-sm:w-[72vw]">
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
          <h2 className="pb-4 text-3xl font-semibold lg:text-4xl xl:text-5xl">
            Join our club!
          </h2>
          <p className="xl:text-xl">
            Ak sa chceš pridať do nášho klubu alebo nás chceš inak podporiť,
            neváhaj nás kontaktovať cez e-mail alebo naše sociálne siete. My ti
            už všetko vysvetlíme :).
          </p>
        </div>
      </div>
    </section>
  );
};
