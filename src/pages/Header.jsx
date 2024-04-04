import logo from "../imgs/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo marvel" />
        </Link>
      </div>
    </header>
  );
};
export default Header;
