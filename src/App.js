import logo from "./logo.svg";
import { useState } from "react";
import { useRef } from "react";
import "./style.css";
import HeaderImage from "./components/Headimage";
import Termekek from "./components/Termekek";
import Idezet from "./components/Idezet";
import Rolunk from "./components/Rolunk";
import Ertekelesek from "./components/Ertekelesek";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const windowWidth = useRef(window.innerWidth);
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
  }
  return (
    <>
      <header>
        <h1>Weebly Pékség</h1>
        <a href="#" alt="hamburger menu">
          <img
            src={require("./assets/menu.png")}
            className="menulogo"
            id="menulogo"
            alt="hamburger menu for small screens"
            onClick={handleClick}
          />
        </a>
        <nav>
          <div className={active ? "navbar" : ""}>
            <ul className="navbar">
              <li>
                <a href="index.html">Kezdőlap</a>
              </li>
              <li>
                <a href="#about">Rólunk</a>
              </li>
              <li>
                <a href="#products">Termékek</a>
              </li>
              <li>
                <a href="#reviews">Értékelések</a>
              </li>
              <li>
                <a href="#contacts">Kapcsolat</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <HeaderImage />
      <main>
        <Rolunk />
        <Termekek />
        <Idezet />
        <Ertekelesek />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
