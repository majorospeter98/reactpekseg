function Termekek() {
    return (
      <section id="products" className="gap">
        <div className="container">
          <h1 className="bold">Termékek</h1>
          <div className="grids gap">
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/bread.webp")} />
                <img
                  src={require("../assets/bread.jpg")}
                  loading="lazy"
                  alt="Weebly kenyér"
                />
                <p className="teszt">Kenyér</p>
              </picture>
            </div>
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/cake.webp")} />
                <img
                  src={require("../assets/cake.jpg")}
                  loading="lazy"
                  alt="Weebly Torta"
                />
                <p className="teszt">Torta</p>
              </picture>
            </div>
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/muffin.webp")} />
                <img
                  src={require("../assets/muffin.jpg")}
                  loading="lazy"
                  alt="Weebly Muffin"
                />
                <p className="teszt">Muffin</p>
              </picture>
            </div>
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/pizza.webp")} />
                <img
                  src={require("../assets/pizza.jpg")}
                  loading="lazy"
                  alt="Weebly kenyér"
                />
                <p className="teszt">Pizza</p>
              </picture>
            </div>
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/pie.webp")} />
                <img
                  src={require("../assets/pie.jpg")}
                  loading="lazy"
                  alt="Weebly Torta"
                />
                <p className="teszt">Pite</p>
              </picture>
            </div>
            <div className="grid">
              <picture>
                <source srcSet={require("../assets/roll.webp")} />
                <img
                  src={require("../assets/roll.jpg")}
                  loading="lazy"
                  alt="Weebly Roll"
                />
                <p className="teszt">Tekercs</p>
              </picture>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default Termekek;
  