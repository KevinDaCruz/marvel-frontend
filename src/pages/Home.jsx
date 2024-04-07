import galaxy from "../imgs/galaxy.jpg";
import spidermanLogo from "../imgs/spiderman-logo.jpg";
import spiderman from "../imgs/spiderman.jpg";
import ironmanLogo from "../imgs/ironman-logo.jpg";
import ironman from "../imgs/ironman.jpg";
import hulkLogo from "../imgs/hulk-logo.jpg";
import hulk from "../imgs/hulk.webp";
import thanosLogo from "../imgs/thanos-logo.jpg";
import thanos from "../imgs/thanos.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <img className="galaxy" src={galaxy} alt="" />
      <div className="container home-menu">
        <div className="marvel-img">
          <div className="home-imgs">
            <img className="thanos" src={thanos} alt="" />
            <img className="thanos-img" src={thanosLogo} alt="" />
          </div>
          <div className="home-imgs">
            <img className="spider" src={spiderman} alt="" />
            <img className="spiderman-img" src={spidermanLogo} alt="" />
          </div>
          <div className="home-imgs">
            <img className="ironman" src={ironman} alt="" />
            <img className="ironman-img" src={ironmanLogo} alt="" />
          </div>
          <div className="home-imgs">
            <img className="hulk" src={hulk} alt="" />
            <img className="hulk-img" src={hulkLogo} alt="" />
          </div>
        </div>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
      </div>
    </main>
  );
};
export default Home;
