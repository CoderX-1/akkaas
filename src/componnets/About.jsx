import React, { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 relative">
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
        <h2 className="font-thin text-4xl sm:text-7xl font-sans text-[#ffffff]">
          Spark. Connect. Thrive. We don’t chase trends, we set them.
        </h2>
        <div className="flex gap-2 text-white font-extrabold">
          <button className="bg-[#013BFF] p-4 rounded-md uppercase">get in touch</button>
        </div>
      </div>
      
      <figure>
        <img className="w-full" src="/secimage.png" alt="" />
      </figure>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={openModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="358" height="197" viewBox="0 0 358 197">
            <g id="Group_13563" data-name="Group 13563" transform="translate(-782 -1370)">
              <path
                id="Polygon_7"
                data-name="Polygon 7"
                d="M98.5,0,197,174H0Z"
                transform="translate(1057.5 1370) rotate(90)"
                fill="#013bff"
                opacity="0.6"
              />
              <text
                transform="translate(782 1497)"
                fill="#fff"
                fontSize="68"
                fontFamily="Montserrat-UltraLight, Montserrat"
                fontWeight="100"
              >
                <tspan x="0" y="0">PLAY REEL</tspan>
              </text>
            </g>
          </svg>
        </button>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div>
            <button className="absolute top-2 right-2 text-white" onClick={closeModal}>
              &times;
            </button>
            <iframe className="w-[80vw] h-[80vw]" src="https://player.vimeo.com/video/800750181?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&autoplay=1#t=" frameborder="0"></iframe>
          </div>
        </div>
      )}
      
      <div className="font-bold text-2xl sm:text-3xl font-sans text-[#ffffff] text-center py-20">
        <h4>AKKAAS boosts business</h4>
        <h4>by co-creating desirable</h4>
        <h4>brand experiences.</h4>
      </div>
    </div>
  );
};

export default About;
