import Logo from "../assets/logo.svg";
import CloseBtn from "../assets/close.svg";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleCloseClick() {
    navigate("/");
  }

  return (
    <header className="font-manrope flex items-center justify-between py-4 px-5">
      <img src={Logo} alt="logo" className="pl-9" />

      {location.pathname === "/register" && (
        <button onClick={handleCloseClick} className={styles.closeBtn}>
          <img src={CloseBtn} alt="close" />
        </button>
      )}
    </header>
  );
}

export default Navbar;
