import React from "react";

const Portfolio = () => {
  return (
    <section>
 <div className="py-14 px-5">
      <div>
        <h4 className="pb-7 text-2xl sm:text-4xl font-normal font-sans text-center text-[#ffffff] ">OUR PORTFOLIO</h4>
        <div className="flex flex-col gap-2">
        <img className="w-full" src="https://theakkaas.com/wp-content/uploads/2023/02/astromust-banner.jpg" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
        <img className="md:w-2/4" src="https://theakkaas.com/wp-content/uploads/2023/01/seventy-banner-1x.jpg"/>
        <img className="md:w-2/4" src="https://theakkaas.com/wp-content/uploads/2023/03/switch-banner-1x.jpg"/>
        
        </div>
        </div>
      </div>
    </div>
    </section>
   
  );
};
export default Portfolio;
