import backgroundImage from '../assets/header-background.png'
import '../styles/header.css'

export default function Header(){

    return (
        <header>
            <p className="title">Find your film</p>
            <p className="toggle">My Watchlist</p>
        </header>
    );
}