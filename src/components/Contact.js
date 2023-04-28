function Contact (props){
    return (
      
<section id="contacts" className="gap">
<h1>{props.firstName}</h1>
<h1>{props.szam}</h1>
<h1>{props.teszt}</h1>
<h1>{props.h2}</h1>
<h1>{props.h3}</h1>
<h1 className="bold container">Kapcsolat</h1>
<div className="contacts container gap">
<div className="contact">
<h1 className="bold">Cím:</h1>
<p>Nagyréde, Tarjáni út 43, 3214</p>
<h1 className="bold">Telefonszám:</h1>
<p>06202556978</p>
<h1 className="bold">Email:</h1>
<p>weebly@gmail.com</p>
</div>
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42901.34611954138!2d19.826781786913713!3d47.77496863496847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740506c08c50c15%3A0x982ce1cb13bf36a8!2sNagyr%C3%A9dei%20Kecskefarm!5e0!3m2!1shu!2shu!4v1655119429870!5m2!1shu!2shu" width="450px" height="300px" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Weebly's google map"></iframe>
</div>
</div>
</section>
    )
}
export default Contact;