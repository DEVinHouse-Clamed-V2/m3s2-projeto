import logo from "../../assets/logo.svg";
import menu from "../../assets/hamburger-menu.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="name-container">
        <h1 id="name-site">AJUDE MEU PET</h1>
      </div>
      <img id="logo" src={logo} alt="Logo do site" />
      <button onClick={() => console.log("clicou")} type="submit">
        <img id="menu" src={menu} alt="Menu hamburguer" />
      </button>
    </div>
  );
};

/*  

  <div className="header-container">
    <div className="name-container">
      <h1 id="name-site">AJUDE MEU PET</h1>
      <img id="logo" src={logo} alt="Logo do site" />
    </div>
    <img id="menu" src={menu} alt="Menu hamburguer" />
  </div>

*/

export default Header;
