import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ArrowIcon from "../../assets/arrow.svg";

function Cta() {
  var settings = {
    dots: true,
    fade: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    waitForAnimate: false,
  };

  return (
    <div className="font-manrope w-[30rem] flex flex-col justify-center gap-[12rem] mt-12 z-10">
      <Slider {...settings}>
        <p className="text-4xl font-semibold leading-[2.8rem]">
          Enhance fortune 50 company&apos;s insights teams research capabilities
        </p>

        <p className="text-4xl font-semibold leading-[2.8rem]">
          Transforming UX for Fortune 50 firms&apos; research
        </p>

        <p className="text-4xl font-semibold leading-[2.8rem]">
          Revamping UI for top-tier insights teams&apos; efficiency
        </p>
      </Slider>

      <button className="bg-[#1c1c1c] hover:bg-[#4E4E4E] transition-all duration-300  text-white px-10 py-6 rounded-full font-semibold flex items-center gap-4 w-fit ml-1">
        <span className="text-lg">Explore More</span>
        <span>
          <img src={ArrowIcon} alt="arrow" className="w-4" />
        </span>
      </button>
    </div>
  );
}

export default Cta;
