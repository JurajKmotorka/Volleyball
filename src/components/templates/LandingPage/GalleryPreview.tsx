const GridItem = (Props: { item: string }) => {
  return (
    <div className="flex h-[14vw] max-h-[18rem] w-[14vw] max-w-[18rem] transform cursor-pointer items-center justify-center bg-gray-600 bg-gray-200 transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg">
      <p>{Props.item}</p>
    </div>
  );
};

export const GalleryPreview = () => {
  return (
    <section className=" mt-20 h-[100vh]  p-10 md:px-[15vw]">
      <div className=" flex items-center justify-between p-4 max-md:flex-col md:p-8 xl:p-12  ">
        <div className=" md:w-[30%]">
          <h2 className="pb-4 text-3xl font-semibold">Instagram</h2>
          <p>
            Sledujte novinky z turnajov a udalosti klubu na našom instagrame
          </p>
        </div>
        <div className=" grid grid-cols-3  gap-2 max-md:pt-4">
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
          <GridItem item="string " />
        </div>
      </div>
    </section>
  );
};
