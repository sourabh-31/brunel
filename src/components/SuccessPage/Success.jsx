import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessTick from "../../assets/successTick.svg";

function Success() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [navigate]);

  return (
    <section className="flex flex-col items-center mt-20">
      <img src={SuccessTick} alt="tick" />
      <p className="font-covered-by-your-grace text-[#2da950] text-3xl mt-10">
        Success Submitted
      </p>
      <p className="font-manrope text-5xl font-semibold mt-3">
        Congratulations
      </p>
      <p className="text-[#727272] text-2xl font-manrope w-[40rem] text-center font-medium mt-8">
        Your request has been successfully submitted to us. We will validate
        your information and reach out to your shortly with updates
      </p>
      <p className="text-[#727272] font-manrope text-xl absolute bottom-12 flex items-center gap-1">
        <span>Redirecting you to Homepage in</span>
        <span className="text-[#1c1c1c] font-bold">{seconds} Seconds</span>
      </p>
    </section>
  );
}

export default Success;
