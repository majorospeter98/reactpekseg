function Footer() {
    return (
      <footer>
        <div className="footerimage gap">
          <div className="introcont">
            <div className="intro">
              <div>
                <h2>Kövess minket!</h2>
                <div className="social">
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../assets/twitterfoot.png")}
                      alt="twitter fiók link"
                    />
                  </a>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../assets/facebookfoot.png")}
                      alt="facebook fiók link"
                    />
                  </a>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../assets/youtubefoot.png")}
                      alt="youtube fiók link"
                    />
                  </a>
                </div>
              </div>
              <div>
                <h2>Gyors linkek</h2>
                <ul>
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
              <div className="opening">
                <h2>Nyitvatartás</h2>
                <div className="opening2">
                  <h3>Hétfő</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Kedd</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Szerda</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Csütörtök</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Péntek</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Szombat</h3>
                  <p>7:00- 19:00 </p>
                </div>
                <div className="opening2">
                  <h3>Vasárnap</h3>
                  <p>8:00- 18:00 </p>
                </div>
              </div>
            </div>
            <hr className="hr" />
            <div className="author container">
              <p> 2023 Majoros Péter</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  