import "../styles/empty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/movie-icon.png";
import { useState ,useEffect } from "react";
import "../styles/home.css";

export default function Home(props) {
    let [SearchResult, setSearchResult] = useState([]);
    let [error, setError] = useState(""); 
    let [watchlist, setWatchlist] = useState(
        JSON.parse(localStorage.getItem("watchlist")) || []
    );
    
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    function handleSearch(title) {
        if (String(title).trim()) {
            setSearchResult([]); // Clear previous results
            setError(""); // Clear previous error
            const newTitle = encodeURIComponent(String(title).trim());

            fetch(
                `http://www.omdbapi.com/?apikey=7e41052a&s=${newTitle}&plot=short`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (!data.Search) {
                        setError("Movie not found"); // <-- set error here
                        return [];
                    }
                    return data.Search;
                })
                .then((movieSet) => {
                    if (movieSet.length === 0) return; // no movies to fetch
                    const detailPromises = movieSet.map((movie) => {
                        const imdbID = movie.imdbID;
                        return fetch(
                            `http://www.omdbapi.com/?apikey=7e41052a&i=${imdbID}&plot=short`
                        ).then((res) => res.json());
                    });

                    Promise.all(detailPromises).then((detailedMovies) => {
                        setSearchResult(detailedMovies);
                    });
                })
                .catch((err) => {
                    console.error(err);
                    setError(
                        "Unable to find what you’re looking for. Please try another search."
                    ); // fallback error
                });
        }
    }

    function addToWatchList(index) {
        const movie = SearchResult[index];
        setWatchlist((prev) => {
            if (prev.find((item) => item.imdbID === movie.imdbID)) return prev; // avoid duplicates
            return [...prev, movie];
        });

    }

    
    function removeWatchlist(index) {
        setWatchlist((prev) => {
            const newList = [...prev];
            newList.splice(index, 1);
            return newList;
        });
    }

    
    return props.isHome ? (
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
                    <p>{error ? error : "Start exploring"}</p>
                </div>
            ) : (
                <div className="movie-list">
                    {SearchResult.map((movie,index) => (
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
                                <button className="watchlist-btn" onClick={()=>{
                                    addToWatchList(index)
                                }}>
                                    ＋ Watchlist
                                </button>
                                <p className="plot">{movie.Plot}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    ) : (
        <div className="movie-list">
            {watchlist.map((movie,index) => (
                <div className="movie-card" key={movie.imdbID} id={movie.imdbID}>
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
                        <button  className="watchlist-btn" onClick={()=>{
                            removeWatchlist(index);
                        }}>- remove</button>
                        <p className="plot">{movie.Plot}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
