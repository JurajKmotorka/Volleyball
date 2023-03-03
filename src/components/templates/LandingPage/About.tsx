import { Parallax } from "react-scroll-parallax";

export const About = () => {
  return (
    <div className=" h-[100vh]">
      <div className="h-30 w-24 bg-red-500">Foreground</div>
      <Parallax speed={-10}>
        <div className="h-30 w-16 bg-green-500">Background</div>
      </Parallax>
    </div>
  );
};
