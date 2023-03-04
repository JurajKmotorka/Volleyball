import { HeroSection } from "./HeroSection";
import { About } from "./About";
import { GalleryPreview } from "./GalleryPreview";

export const LandingPage = () => {
  return (
    <div className="m-auto max-w-[150rem] scroll-smooth ">
      <HeroSection />
      <GalleryPreview />
      <About />
    </div>
  );
};
