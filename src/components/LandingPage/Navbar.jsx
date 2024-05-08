import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function Navbar() {
  const navigate = useNavigate();

  function handleProjectClick() {
    navigate("/register");
  }

  return (
    <header className="font-manrope flex items-center justify-between border border-[#eaeaea] rounded-full py-4 px-5">
      <img src={Logo} alt="logo" className="pl-9" />
      <div className="flex items-center gap-4">
        <button
          className="border border-[#eaeaea] px-8 py-5 rounded-full font-semibold hover:bg-[#f1f1f1] transition-all duration-300"
          onClick={handleProjectClick}
        >
          Get Projects
        </button>
        <button className="bg-[#1c1c1c] hover:bg-[#4E4E4E] transition-all duration-300 text-white px-9 py-5 rounded-full font-semibold">
          Onboard Talent
        </button>
      </div>
    </header>
  );
}

export default Navbar;
