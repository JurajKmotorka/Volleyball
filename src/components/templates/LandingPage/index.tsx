import { HeroSection } from "./HeroSection";
import { JoinUs } from "./JoinUs";
import { GalleryPreview } from "./GalleryPreview";
import { Footer } from "./Footer";
import { About } from "./About";

export const LandingPage = () => {
  return (
    <div className="m-auto max-w-[150rem] overflow-hidden scroll-smooth ">
      <HeroSection />
      <GalleryPreview />
      <JoinUs />
      <About />
      <Footer />
    </div>
  );
};
