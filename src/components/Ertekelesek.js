function Ertekelesek() {
    return (
      <section id="reviews" className="gap">
        <h1 className="bold container">Értékelések</h1>
        <div className="container">
          <div className="reviews gap">
            <div className="review">
              <picture>
                <source
                  srcSet={require("../assets/alkorta.webp")}
                  alt="Rafa Alkortas képe"
                />
                <img
                  src={require("../assets/alkorta.jpg")}
                  loading="lazy"
                  alt="Rafa Alkortas képe"
                />
              </picture>
              <h2>Rafa Alkorta</h2>
              <p className="quote">A torta fantasztikus volt</p>
            </div>
            <div className="review">
              <picture>
                <source
                  srcSet={require("../assets/ziganda.jpg")}
                  alt="Kuko Ziganda képe"
                />
                <img
                  src={require("../assets/ziganda.jpg")}
                  loading="lazy"
                  alt="Ziganda képe!"
                />
              </picture>
              <h2>Rafa Alkorta</h2>
              <p className="quote">A torta zseniális volt</p>
            </div>
            <div className="review">
              <picture>
                <source
                  srcSet={require("../assets/ziganda.jpg")}
                  alt="Kuko  másik Ziganda képe"
                />
                <img
                  src={require("../assets//elizegi.jpg")}
                  loading="lazy"
                  alt="Ziganda másik képe!"
                />
              </picture>
              <h2>Rafa Alkorta</h2>
              <p className="quote">A legjobb pékség</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default Ertekelesek;
  