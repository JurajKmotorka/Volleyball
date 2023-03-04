import { HeroSection } from "./HeroSection";
import { About } from "./About";
import { GalleryPreview } from "./GalleryPreview";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <div className="m-auto max-w-[150rem] overflow-hidden scroll-smooth ">
      <HeroSection />
      <GalleryPreview />
      <About />
      <Footer />
    </div>
  );
};
