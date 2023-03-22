import Image from "next/image";
import { CiFacebook, CiInstagram, CiMail, CiPhone } from "react-icons/ci";
import { ParallaxBanner } from "react-scroll-parallax";
import { Header } from "../../elements/Header";

export const HeroSection = () => {
  return (
    <section>
      <ParallaxBanner
        layers={[{ image: "/hero-background.jpg", speed: -20 }]}
        className="relative mx-auto flex aspect-[2/1]  h-[65vh] max-h-[80rem]  flex-col items-center  md:h-[100vh]   lg:items-start"
      >
        <div className="z-10 w-full p-2 md:p-8 xl:p-12 ">
          <Header />
          <div className="  flex flex-col-reverse items-center  text-base  md:flex-row">
            <div className=" absolute z-20 flex w-[30vw] basis-1 justify-around text-2xl max-md:-translate-y-[2.5rem] md:h-[22vh] md:flex-col   xl:h-[20vh]  2xl:text-3xl">
              <CiFacebook className="transition duration-300 ease-in-out hover:scale-110" />
              <a
                href="https://www.instagram.com/vk_topolcany/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR20BQ6avSlm9xskmw_N1gZYIQx1buWsm50t4_eCpHsma--LbaqnzlIiNUk"
                target="_blank"
              >
                <CiInstagram className="transition duration-300 ease-in-out hover:scale-110 " />
              </a>
              <a href="mailto:volejbaltopolcany@gmail.com" target="_blank">
                <CiMail className="transition duration-300 ease-in-out hover:scale-110 " />
              </a>
              <a href="tel:+421915548823" target="_blank">
                <CiPhone className="transition duration-300 ease-in-out hover:scale-110 " />
              </a>
            </div>
            <div className="z-10 my-[15vh] font-oswald text-[3rem] leading-tight sm:text-[4rem] md:my-[20vh]   md:px-[15vw]  md:text-[5rem] lg:my-[15vh] lg:text-[6.4rem] xl:text-[8rem]  2xl:text-[10rem]">
              <div className=" text-stroke text-white">ONE TEAM</div>
              <div>ONE DREAM</div>
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
      </ParallaxBanner>
    </section>
  );
};
