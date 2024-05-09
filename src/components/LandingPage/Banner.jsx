import Spark from "../../assets/spark.svg";
import Rocket from "../../assets/rocket.svg";
import BannerImg from "../../assets/banner.svg";
import BannerCard from "./BannerCard";

function Banner() {
  return (
    <div className="font-manrope relative sm:scale-75 xl:scale-[0.8] 2xl:scale-100">
      <img src={BannerImg} alt="banner" className="scale-95" />
      <div className="absolute top-[16%] -left-28">
        <BannerCard
          description="Achieved reduction in project execution time by optimising team availability"
          bgColor="#fff"
          textColor="#828282"
          width="15rem"
        >
          <div className="text-5xl font-bold relative mt-6">
            <img
              src={Spark}
              alt="sparkImg"
              className="w-22 absolute -left-12 bottom-2"
            />
            40%
          </div>
        </BannerCard>
      </div>

      <div className="absolute -bottom-8 -right-12">
        <BannerCard
          description="Reduced client expenses by saving on hiring and employee costs."
          bgColor="#002e18"
          textColor="#cccccc"
          width="16rem"
          mb="0.7rem"
        >
          <div className="text-5xl mb-5 mt-3 font-bold text-white">
            $0.5 <span className="text-base text-[#a6a3a0]">MILLION</span>
          </div>
        </BannerCard>
      </div>

      <div className="flex items-center gap-4 bg-white shadow-lg py-4 pl-5 pr-10 rounded-full absolute bottom-16 -left-12">
        <img src={Rocket} alt="rocket" />
        <div>
          <p className="text-2xl font-bold">10 DAYS</p>
          <p className="text-[#828282] font-medium">Staff Deployment</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
