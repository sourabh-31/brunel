import Banner from "./Banner";
import Cta from "./Cta";
import Grid from "../../assets/grid.svg";

function HeroSection() {
  return (
    <section className="mt-20">
      <div className="text-center">
        <p className="font-covered-by-your-grace text-[#2da950] text-3xl">
          Success stories
        </p>
        <p className="font-manrope text-5xl font-semibold">
          Every success journey
        </p>
        <p className="font-manrope text-5xl font-semibold mt-2">
          we&apos;ve encountered.
        </p>
      </div>

      <div className="flex justify-center gap-40 mt-24">
        <Banner />
        <Cta />
      </div>

      <img
        src={Grid}
        alt="grid"
        className="scale-90 absolute top-[35%] -right-6"
      />
    </section>
  );
}

export default HeroSection;
