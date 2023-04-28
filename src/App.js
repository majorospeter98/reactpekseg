import logo from './logo.svg';
import './App.css';
import './style.css'
import Rolunk from './components/Rolunk'; 
import {Routes,Route,Link} from 'react-router-dom';
import HeaderImage from './components/Headimage';
import Termekek from './components/Termekek';
import Idezet from './components/Idezet';
import Ertekelesek from './components/Ertekelesek'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  function handleClick(){
        console.log("xd");
  };
  return (
    <div>
    <header>
    <h1>Weebly Pékség</h1>
    <a href="#" alt="hamburger menu"><img src={require('./assets/menu.png')} class="menulogo" alt="hamburger menu for samll screens" /></a>
<nav>
    <div className="navbar">
<ul>       
<li><a href="">Kezdőlap</a></li>
<li><a href="#about">Termékek</a></li>
<li><a href="#products">Termékek</a></li>
<li><a href="#reviews">Értékelések</a></li>
<li><a href="#contacts">Kapcsolat</a></li>
</ul>    
</div>
</nav>        
</header>

<Routes>
    <Route path="/#about" element={<Rolunk /> }></Route>
    <Route path="/#about" element={<Rolunk /> }></Route>
        </Routes>
        <HeaderImage/>
       
    <Rolunk/>
    <Termekek/>
    <Idezet/>
    <Ertekelesek/>
    <Contact firstName="valami" szam="0" teszt="adatok"/>
    <h1>Task: Add a button and handle a click event</h1>
    <button onClick={handleClick}>Guess the number between 1 and 3. </button>
    <Footer/>
  
    </div>
    
  );
}

export default App;
