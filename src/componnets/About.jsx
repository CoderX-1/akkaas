import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div className="text-[#ffffff] ">
          <ul className="flex gap-4">
            <li>
              <mark className="bg-blue-600">CRE</mark>
              <span>ATIVE.</span>
            </li>
            <li>
              <mark className="bg-blue-600">TEC</mark>
              <span>HNOLOGY.</span>
            </li>
            <li>
              <mark className="bg-blue-600">WE</mark>
              <span>B3.00.</span>
            </li>
          </ul>
        </div>
        <h2 className="font-thin text-4xl sm:text-7xl font-sans text-[#ffffff]">Spark. Connect. Thrive. We don’t chase trends, we set them. </h2>
        <div className="flex gap-2 text-white font-extrabold">
            <button className="bg-[#013BFF] p-4 rounded-md uppercase">get in touch</button>
        </div>
      </div>
      <figure>
        <img className="w-full" src="/secimage.png" alt="" />
        <div className="absolute top-3/4 left-2/4 bg-white">
        <button>Play Reel</button>
        </div>
      </figure>
      <div className="font-bold text-2xl sm:text-3xl font-sans text-[#ffffff] text-center py-20">
        <h4>AKKAAS boosts business</h4>
        <h4>by co-creating desirable</h4>
        <h4>brand experiences.</h4>
      </div>
    </div>
  );
};
export default About;
