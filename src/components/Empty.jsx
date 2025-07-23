import "../styles/empty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import movieImage from '../assets/movie-icon.png'

export default function Empty() {
    return (
        <div className="empty">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
            <input type="text" placeholder="Movie Name"/>
            <button className="search-button">Search</button>
            <div className="image">
                <img src={movieImage} alt="movie" />
                <p>Start exploring</p>
            </div>
        </div>
    );
}
