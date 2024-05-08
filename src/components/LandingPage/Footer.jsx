import Copyright from "../../assets/copyright.svg";

function Footer() {
  return (
    <footer className="font-manrope bg-[#f5f5f5] rounded-[2.4rem] flex items-center justify-between py-14 px-12 mt-14 mb-8">
      <div className="flex items-center gap-4">
        <img src={Copyright} alt="copyright" />
        <p className="font-medium text-lg">Talup 2023. All rights reserved</p>
      </div>

      <div className="flex items-center text-lg gap-16">
        <p className="underline cursor-pointer">Terms & Conditions</p>
        <p className="underline cursor-pointer">Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
