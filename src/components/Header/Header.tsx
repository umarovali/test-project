import Logo from "../../assets/icons/logo.svg";
import "../../assets/css/header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <img className="header_logo" src={Logo} alt="Logo..." />

          <h1 className="header_title">All Services</h1>
        </div>
      </div>
    </header>
  );
}
