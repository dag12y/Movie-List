import backgroundImage from '../assets/header-background.png'
import '../styles/header.css'

export default function Header(props){
     let isHome=props.isHome
    return (
        <header>
            <p className="title">Find your film</p>
            <p className="toggle" onClick={props.toggle}>My Watchlist</p>
        </header>
    );
}