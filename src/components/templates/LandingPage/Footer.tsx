import { useMediaQuery } from "react-responsive";
import Image from "next/image";
export const Footer = () => {
  return (
    <section
      id="footer"
      className=" relative mt-16  grid w-full grid-cols-9 gap-1  bg-[url('/court-bottom-1.png')] bg-cover  px-2 pt-8 sm:grid-cols-11 lg:pt-16 [&>a>*]:rounded-md "
    >
      <h3 className="text-centerfont-semibold col-span-2 m-auto text-lg text-white sm:text-2xl sm:font-bold lg:text-4xl">
        Podporili nás
      </h3>
      <a
        className="z-10 col-span-3  transition-transform hover:scale-105"
        href="https://thescarabeus.eu"
        target="blank"
      >
        <Image
          src="/scarablogo.png"
          alt="The scarabeus"
          height={600}
          width={600}
        />
      </a>
      <a
        className="z-10 col-span-2 my-auto  transition-transform hover:scale-105"
        href="https://www.sluzbyto.sk/"
        target="blank"
      >
        <Image src="/sluzby.png" height={600} width={600} alt="sluzby TO" />
      </a>
      <a
        className="z-10 col-span-4 row-start-2 transition-transform hover:scale-105"
        href="https://www.topolcany.sk/"
        target="blank"
      >
        <Image
          src="/mestoTO.jpg"
          height={600}
          width={600}
          alt="Mesto Topoľčany"
        />
      </a>
      <a
        className=" z-10 col-span-2 col-start-5  transition-transform hover:scale-105"
        href="https://www.facebook.com/groups/756816954329692/"
        target="blank"
      >
        <Image src="/forte.jpg" height={600} width={600} alt="Forte Sport" />
      </a>
      <a
        className="z-10 col-span-2 row-span-2 transition-transform hover:scale-105"
        href="https://www.instagram.com/peterfaltys/"
        target="blank"
      >
        <Image
          src="/peterfaltys.jpg"
          height={600}
          width={600}
          alt="Peter Faltys"
        />
      </a>
      <a
        className="z-10 col-span-2 row-span-1 transition-transform hover:scale-105"
        href="https://tichelmann.sk/"
        target="blank"
      >
        <Image src="/Tichelman.jpg" height={600} width={600} alt="Tichelmann" />
      </a>
      <a
        className="z-10 col-start-3 row-start-4 transition-transform hover:scale-105"
        href="https://www.novaduchonka.sk/"
        target="blank"
      >
        <Image
          src="/duchonka.png"
          height={600}
          width={600}
          alt="Nova Duchonka"
        />
      </a>
      <a
        className="z-10 col-start-5 row-start-3 transition-transform hover:scale-105"
        href="https://www.restauraciakoarch.sk/"
        target="blank"
      >
        <Image src="/koarch.jpg" height={600} width={600} alt="koarch" />
      </a>
      <a
        className="z-10 col-start-5 row-start-4 transition-transform hover:scale-105 "
        href="http://www.liporta.sk/"
        target="blank"
      >
        <Image src="/liporta.png" height={600} width={600} alt="Liporta" />
      </a>

      <a
        className="z-10 col-start-6 row-start-3 transition-transform hover:scale-105"
        href="https://www.mooobistro.sk/"
        target="blank"
      >
        <Image src="/mooo.png" height={600} width={600} alt="MOOO" />
      </a>

      <a
        className="z-10 col-start-4 row-start-4 transition-transform hover:scale-105"
        href="https://www.vitar.sk/"
        target="blank"
      >
        <Image src="/vitar.jpg" height={600} width={600} alt="Vitar" />
      </a>
      <span className=" -z-10 col-span-5 col-start-8 row-span-3 row-start-1 md:col-span-6 md:col-start-5 md:row-span-3 md:row-start-3  " />
      <a
        href="https://www.mikasasport.sk/"
        target="blank"
        className="absolute  bottom-0 -right-5 transition-transform hover:scale-[1.03]"
      >
        <Image src="/court-ball.png" alt="Mikasa" height={100} width={2000} />
      </a>
    </section>
  );
};
