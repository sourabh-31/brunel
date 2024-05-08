import Questions from "./Questions";
import UnionLogo from "../../assets/union.svg";

function Faq() {
  return (
    <section className="bg-[#e8eee7] rounded-3xl flex justify-between p-16 mt-[12rem] relative">
      <div>
        <p className="font-covered-by-your-grace text-[#9E9D9D] text-3xl">
          What&apos; on your mind
        </p>
        <p className="font-manrope text-5xl font-semibold mt-3">
          Ask Questions
        </p>
      </div>
      <Questions />
      <img src={UnionLogo} alt="union" className="absolute bottom-0 left-0" />
    </section>
  );
}

export default Faq;
