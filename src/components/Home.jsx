import "../styles/empty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import movieImage from '../assets/movie-icon.png'
import { useState } from "react";

export default function Home() {
    let [SearchResult,setSearchResult] = useState([])

    function handleSearch(title){
        if(String(title).trim()){
            const newTitle = encodeURIComponent(String(title).trim());
            fetch(`http://www.omdbapi.com/?apikey=7e41052a&s=${newTitle}`)
                .then(res=>res.json())
                .then(data=>console.log(data));
        }
    }
    // http://www.omdbapi.com/?i=tt3896198&apikey=7e41052a
    // http://img.omdbapi.com/?apikey=7e41052a&
    


    return (
        SearchResult.length!==0 ? (<p style={{color:'white'}}>hello</p>) :(

        <div className="empty">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
            <input type="text" placeholder="Movie Name"/>
            <button className="search-button" onClick={()=>{
                handleSearch(document.querySelector('input').value)
            }}>Search</button>
            <div className="image">
                <img src={movieImage} alt="movie" />
                <p>Start exploring</p>
            </div>
        </div>
        )

    );
}
