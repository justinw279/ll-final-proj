import NavBar from './Nav.js'
import {Link} from "react-router-dom"
import '../App.css';

export default function Header() {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Mediterranean restaurant in Chicago!</p>
                    <Link to="/booking"><button aria-label="On Click">Book table</button></Link>
                </div>

                <div className="banner-img">
                    <img src = './images/restauranfood.jpg' alt = "restaurant food"/>
                </div>
            </section>  
        </header>
    );
    
}