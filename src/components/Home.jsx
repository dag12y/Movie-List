import "../styles/empty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/movie-icon.png";
import { useState } from "react";
import "../styles/home.css";

export default function Home() {
    let [SearchResult, setSearchResult] = useState([]);

    function handleSearch(title) {
        if (String(title).trim()) {
            setSearchResult([]);
            const newTitle = encodeURIComponent(String(title).trim());

            fetch(
                `http://www.omdbapi.com/?apikey=7e41052a&s=${newTitle}&plot=short`
            )
                .then((res) => res.json())
                .then((data) => data.Search)
                .then((movieSet) => {
                    const detailPromises = movieSet.map((movie) => {
                        const imdbID = movie.imdbID;
                        return fetch(
                            `http://www.omdbapi.com/?apikey=7e41052a&i=${imdbID}&plot=short`
                        ).then((res) => res.json());
                    });

                    Promise.all(detailPromises).then((detailedMovies) => {
                        setSearchResult(detailedMovies);
                    });
                });
        }
    }
    

    return (
        <div className="empty">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
            <input type="text" placeholder="Movie Name" />
            <button
                className="search-button"
                onClick={() => {
                    handleSearch(document.querySelector("input").value);
                }}
            >
                Search
            </button>

            {SearchResult.length === 0 ? (
                <div className="image">
                    <img src={movieImage} alt="movie" />
                    <p>Start exploring</p>
                </div>
            ) : (
                <div className="movie-list">
                    {SearchResult.map((movie) => (
                        <div className="movie-card" key={movie.imdbID}>
                            <div className="poster">
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>

                            <div className="details">
                                <h2 className="title">
                                    {movie.Title}
                                    <span className="rating">
                                        ⭐ {movie.imdbRating}
                                    </span>
                                </h2>
                                <p className="meta">
                                    {movie.Runtime} • {movie.Genre}
                                </p>
                                <button className="watchlist-btn">
                                    ＋ Watchlist
                                </button>
                                <p className="plot">{movie.Plot}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}
