function Ertekelesek(){

    return (
<section id="reviews" class="gap">
        <h1 class="bold container">Értékelések</h1>
        <div class="container">
<div class="reviews gap">
    <div class="review">
        <picture>
            <source srcset={require('../assets/alkorta.webp')} alt="Rafa Alkortas képe"/>
            <img src={require('../assets/alkorta.jpg')}  loading="lazy" alt="Rafa Alkortas képe"/>
        </picture>
        <h2>Rafa Alkorta</h2>
        <p class="quote">A torta fantasztikus volt</p>
    </div>
    <div class="review">
        <picture>
            <source srcset={require('../assets/ziganda.jpg')} alt="Kuko Ziganda képe"/>
            <img src={require('../assets/ziganda.jpg')}  loading="lazy" alt="Alt Text!"/>
        </picture>
        <h2>Rafa Alkorta</h2>
        <p class="quote">A torta fantasztikus volt</p>
    </div>
    <div class="review">
        <picture>
            <source srcset={require('../assets/ziganda.jpg')} alt="Kuko Ziganda képe"/>
            <img src={require('../assets/ziganda.jpg')}  loading="lazy" alt="Alt Text!"/>
        </picture>
        <h2>Rafa Alkorta</h2>
        <p class="quote">A torta fantasztikus volt</p>
    </div>
</div>
</div>
    </section>
    )
    }
    
    export default Ertekelesek;