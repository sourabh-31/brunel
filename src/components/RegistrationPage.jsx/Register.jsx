import { useState } from "react";
import CautionLogo from "../../assets/caution.svg";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const isNameEmpty = name.trim() === "";
  const isEmailEmpty = email.trim() === "";
  const isFormInvalid = isNameEmpty || isEmailEmpty;

  // Regex of email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = emailPattern.test(email);
    setIsEmailValid(isValid);
    if (isValid) {
      navigate("/success");
    }
  }

  return (
    <section>
      <div className="text-center">
        <p className="font-covered-by-your-grace text-[#2da950] text-3xl">
          Registration Form
        </p>
        <p className="font-manrope text-5xl font-semibold mt-3">
          Start your success
        </p>
        <p className="font-manrope text-5xl font-semibold mt-3">
          Journey here!
        </p>
      </div>
      <form
        className="font-manrope flex flex-col w-[24rem] ml-auto mr-auto gap-5 mt-12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-[#efefef] py-5 px-8 rounded-full placeholder:text-[#827a7a] placeholder:text-base text-lg font-medium"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className={`bg-[#efefef] py-5 px-8 rounded-full placeholder:text-[#827a7a] placeholder:text-base text-lg font-medium ${
            !isEmailValid ? "border-2 border-red-500" : ""
          }`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isEmailValid && (
          <div className="flex gap-2">
            <img src={CautionLogo} alt="caution" />
            <p className="text-[#ff0808] font-medium">
              Enter a valid email address
            </p>
          </div>
        )}
        <button
          className={`rounded-full py-5 text-white mt-5 disabled:cursor-not-allowed ${
            isFormInvalid ? "bg-[#c9c9c9]" : "bg-black"
          }`}
          disabled={isFormInvalid}
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Register;
