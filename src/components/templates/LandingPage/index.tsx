import { HeroSection } from "./HeroSection";
import { JoinUs } from "./JoinUs";
import { GalleryPreview } from "./GalleryPreview";
import { Footer } from "./Footer";
import { About } from "./About";
import Image from "next/image";

export const LandingPage = () => {
  return (
    <div className="m-auto max-w-[150rem] overflow-hidden scroll-smooth ">
      <HeroSection />

      <div className="mx-auto my-[15vh] max-w-7xl p-[5%] text-center">
        <h1 className="relative mb-2 pb-4  font-bold leading-tight text-gray-900">
          <span className="bg-gradient-to-r from-[#110d26] to-[#2c0a64] bg-clip-text text-2xl text-transparent md:text-3xl  lg:text-5xl xl:text-6xl">
            Vitajte na oficiálnej stránke Volejbalového klubu Topoľčany.
          </span>
          <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#2c0a64] to-[#110d26]"></span>
        </h1>
        <p
          id="about"
          className="mb-8 text-lg  text-gray-800 lg:text-xl xl:text-2xl"
        >
          Nájdete tu všetky potrebné informácie o nás a o našej činnosti.
          <br />
          Objavte svet volejbalu v Topoľčanoch!
        </p>
      </div>
      <div className="   flex h-[30vh] items-center bg-gradient-to-r from-[#110d26] to-[#2c0a64] p-[5%] text-zinc-100 md:px-[15vw] lg:text-xl 2xl:text-2xl">
        <p className="leading-[25px] lg:leading-relaxed 2xl:leading-loose">
          Sme <b>partia ľudí</b>, ktorí milujú volejbal, jeho dynamiku a
          nezameniteľnú atmosféru. Prvé zmienky založiť náš
          <b> volejbalový klub </b>
          siahajú do roku 2018, kedy sme chceli nadviazať na bohatú históriu
          turnajov v plážovom volejbale v našom okrese. Cieľom nášho klubu je
          <b> podporovať hru volejbalu</b>, poskytnúť hráčom možnosť rozvíjať
          volejbalové schopnosti no predovšetkým vytvárať
          <b> priateľské prostredie </b> v jedinečnom{" "}
          <b> športovom kolektíve</b>.
        </p>
      </div>

      <GalleryPreview />
      <div className="   flex h-[30vh] items-center bg-gradient-to-r from-[#110d26] to-[#2c0a64] p-[5%] text-zinc-100 md:px-[15vw] lg:text-xl 2xl:text-2xl">
        <p className="leading-[25px] lg:leading-relaxed 2xl:leading-loose">
          Našou doménou je <b>organizácia turnajov</b> v plážovom volejbale,
          ktorých kvalita sa radí medzi <b>špičku v nitrianskom kraji</b>.
          Spoločne sa zároveň <b>pripravujeme</b> na účasť na rôznych
          volejbalových turnajoch na Slovensku. Sme presvedčení, že aj malý klub
          <b> s veľkým nadšením</b> môže dosiahnúť nevídané úspechy! Veríme, že
          aj <b>práve ty</b> nám dokážeš pomôcť <b>rásť</b>!
        </p>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};
