import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
  
  return (
    <div className="container mx-auto">
    <section className="p-4">
      <div>
        <h4 className="pb-7 text-2xl sm:text-4xl font-normal font-sans text-[#ffffff]">
          What our
          <span>customers</span> <br />
          have to say about us.
        </h4>{" "}
      </div>
      <Slider {...settings} className="text-white">
        <div className="p-4  max-w-[1400px]">
          <div className="flex flex-col min-h-[300px] sm:flex-row bg-[#1C1C1C] w-auto   ">
            <div className="flex flex-col items-center py-4 w-full sm:w-[30rem] justify-center">
              <figure className="mb-5">
                <img
                  decoding="async"
                  width="166"
                  height="166"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/transdefy-testimonial.svg"
                  className="max-w-full h-auto"
                  alt="Transdefy logo"
                />
              </figure>

              <figure className="">
                <img
                  decoding="async"
                  width="167"
                  height="24"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/rating_stars.png"
                  className="max-w-full h-auto"
                  alt="Rating stars"
                />
              </figure>
            </div>
            <div className="flex flex-col justify-center p-4 w-full sm:w-[70rem]">
              <h4 className="uppercase text-xl font-bold mb-2 text-white">
                transdefy
              </h4>
              <p className="text-white/70">
                The team has been very focused &amp; work towards helping the
                client reach their objectives. Adding value with every
                interaction and directing the best for the client has been at
                the core of their engagement. Comes up with possibilities of
                what can be done better with multiple options that adds to the
                customer experience. All in all, I recommend the team for their
                creativity and will to go the extra mile with their clients.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 min-h-[300px] max-w-[1400px]">
          <div className="flex flex-col sm:flex-row min-h-[300px] bg-[#1C1C1C] w-auto">
            <div className="flex flex-col items-center p-4 w-full sm:w-[30rem] justify-center ">
              <figure className="mb-5">
                <img
                  decoding="async"
                  width="166"
                  height="166"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/melow-testimonial.svg"
                  className="max-w-full h-auto"
                  alt="mellow logo"
                />
              </figure>

              <figure className="">
                <img
                  decoding="async"
                  width="167"
                  height="24"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/rating_stars.png"
                  className="max-w-full h-auto"
                  alt="Rating stars"
                />
              </figure>
            </div>
            <div className="flex flex-col justify-center p-4 w-full sm:w-[70rem]">
              <h4 className="uppercase text-xl font-bold mb-2 text-white">
              mellow
              </h4>
              <p className="text-white/70">
              The account manage and deliverables were both of excellent quality. I would recommend them to any partners and we will be using them again for future projects.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 max-w-[1400px]">
          <div className="flex flex-col sm:flex-row min-h-[300px] bg-[#1C1C1C] w-auto">
            <div className="flex flex-col items-center p-4 w-full sm:w-[30rem] justify-center">
              <figure className="mb-5">
                <img
                  decoding="async"
                  width="166"
                  height="166"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/switch-reality-testimonial.svg"
                  className="max-w-full h-auto"
                  alt="switch-reality logo"
                />
              </figure>

              <figure className="">
                <img
                  decoding="async"
                  width="167"
                  height="24"
                  src="https://theakkaas.com/wp-content/uploads/2023/02/rating_stars.png"
                  className="max-w-full h-auto"
                  alt="Rating stars"
                />
              </figure>
            </div>
            <div className="flex flex-col justify-center p-4 w-full sm:w-[70rem]">
              <h4 className="uppercase text-xl font-bold mb-2 text-white">
              switch-reality
              </h4>
              <p className="text-white/70">
              The Akkaas were very professional and creative. They created a very innovative website and made a whole study for the customer journey and mind maps that no other company provided. We recommend them to anyone seeking creative websites and branding.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
    <section>
        <div>
        <figure>
        <img className="w-full" src="https://theakkaas.com/wp-content/uploads/2024/05/our-approach-bg.webp" alt="" />
        <div className="absolute top-3/4 left-2/4 bg-white">
        <h4>Play Reel</h4>
        </div>
      </figure>
        </div>
    </section>
    </div>
  );
};
export default Review;
