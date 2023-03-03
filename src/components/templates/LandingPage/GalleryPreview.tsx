import { useParallax } from "react-scroll-parallax";

const GridItem = (Props: { item: string }) => {
  return (
    <div className=" flex h-[25vw] max-h-[18rem] w-[25vw] max-w-[18rem] transform cursor-pointer items-center justify-center bg-gray-400 transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg md:h-[14vw] md:w-[14vw] xl:h-[12vw] xl:w-[12vw]">
      <p>{Props.item}</p>
    </div>
  );
};

export const GalleryPreview = () => {
  const parallax = useParallax<HTMLDivElement>({
    translateY: [250, 0, "easeOutQuint"],
  });

  return (
    <section className=" mt-10 h-[100vh] overflow-hidden p-10   md:px-[15vw]">
      <div className=" flex items-center justify-between p-2 max-md:flex-col md:p-8 xl:p-12  ">
        <div className=" md:w-[30%]">
          <h2 className="pb-4 text-3xl font-semibold">Instagram</h2>
          <p>
            Sledujte novinky z turnajov a udalosti klubu na našom instagrame
          </p>
        </div>
        <div
          ref={parallax.ref}
          className=" grid grid-cols-3 gap-[0.1rem] max-md:pt-4 md:gap-2"
        >
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="image " />
          <GridItem item="imaeg " />
          <GridItem item="image " />
        </div>
      </div>
    </section>
  );
};
