import "../styles/empty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/movie-icon.png";
import { useState } from "react";
import '../styles/home.css'

export default function Home() {
    let [SearchResult, setSearchResult] = useState([
        {
            Title: "Mission: Impossible - Ghost Protocol",
            Year: "2011",
            Rated: "PG-13",
            Released: "21 Dec 2011",
            Runtime: "132 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Brad Bird",
            Writer: "Bruce Geller, Josh Appelbaum, André Nemec",
            Actors: "Tom Cruise, Jeremy Renner, Simon Pegg",
            Plot: "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
            Language: "English, Russian, French, Arabic, Swedish",
            Country:
                "United States, United Arab Emirates, Russia, Canada, Czech Republic, India",
            Awards: "5 wins & 30 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.4/10" },
                { Source: "Rotten Tomatoes", Value: "94%" },
                { Source: "Metacritic", Value: "73/100" },
            ],
            Metascore: "73",
            imdbRating: "7.4",
            imdbVotes: "552,506",
            imdbID: "tt1229238",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$209,397,903",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible",
            Year: "1996",
            Rated: "PG-13",
            Released: "22 May 1996",
            Runtime: "110 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Brian De Palma",
            Writer: "Bruce Geller, David Koepp, Steven Zaillian",
            Actors: "Tom Cruise, Jon Voight, Emmanuelle Béart",
            Plot: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
            Language: "English, French, Czech",
            Country: "United States",
            Awards: "3 wins & 17 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.2/10" },
                { Source: "Rotten Tomatoes", Value: "65%" },
                { Source: "Metacritic", Value: "59/100" },
            ],
            Metascore: "59",
            imdbRating: "7.2",
            imdbVotes: "499,811",
            imdbID: "tt0117060",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$180,981,856",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible - Rogue Nation",
            Year: "2015",
            Rated: "PG-13",
            Released: "31 Jul 2015",
            Runtime: "131 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Christopher McQuarrie",
            Writer: "Bruce Geller, Christopher McQuarrie, Drew Pearce",
            Actors: "Tom Cruise, Rebecca Ferguson, Jeremy Renner",
            Plot: "Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization as highly skilled as they are and committed to destroying the IMF.",
            Language: "English, Swedish, German, Russian",
            Country:
                "United States, China, United Kingdom, Austria, Morocco, Hong Kong",
            Awards: "6 wins & 26 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BZjUwZjg2ZjAtY2RhZi00YmZjLTlhNGQtOWQwNDk1MjhhM2NhXkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.4/10" },
                { Source: "Rotten Tomatoes", Value: "94%" },
                { Source: "Metacritic", Value: "75/100" },
            ],
            Metascore: "75",
            imdbRating: "7.4",
            imdbVotes: "431,003",
            imdbID: "tt2381249",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$195,042,377",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible III",
            Year: "2006",
            Rated: "PG-13",
            Released: "05 May 2006",
            Runtime: "126 min",
            Genre: "Action, Adventure, Thriller",
            Director: "J.J. Abrams",
            Writer: "Alex Kurtzman, Roberto Orci, J.J. Abrams",
            Actors: "Tom Cruise, Michelle Monaghan, Ving Rhames",
            Plot: "IMF agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancée in response.",
            Language: "English, Italian, Mandarin, Cantonese, German, Czech",
            Country: "United States, Germany, China, Italy",
            Awards: "7 wins & 14 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "6.9/10" },
                { Source: "Rotten Tomatoes", Value: "73%" },
                { Source: "Metacritic", Value: "66/100" },
            ],
            Metascore: "66",
            imdbRating: "6.9",
            imdbVotes: "413,548",
            imdbID: "tt0317919",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$134,029,801",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible - Fallout",
            Year: "2018",
            Rated: "PG-13",
            Released: "27 Jul 2018",
            Runtime: "147 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Christopher McQuarrie",
            Writer: "Bruce Geller, Christopher McQuarrie",
            Actors: "Tom Cruise, Henry Cavill, Ving Rhames",
            Plot: "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
            Language: "English, French",
            Country: "United States, China, France, Norway",
            Awards: "Nominated for 1 BAFTA Award26 wins & 41 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.7/10" },
                { Source: "Rotten Tomatoes", Value: "98%" },
                { Source: "Metacritic", Value: "87/100" },
            ],
            Metascore: "87",
            imdbRating: "7.7",
            imdbVotes: "402,241",
            imdbID: "tt4912910",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$220,159,104",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible II",
            Year: "2000",
            Rated: "PG-13",
            Released: "24 May 2000",
            Runtime: "123 min",
            Genre: "Action, Adventure, Thriller",
            Director: "John Woo",
            Writer: "Bruce Geller, Ronald D. Moore, Brannon Braga",
            Actors: "Tom Cruise, Dougray Scott, Thandiwe Newton",
            Plot: 'IMF agent Ethan Hunt is sent to Sydney to find and destroy a genetically modified disease called "Chimera".',
            Language: "English",
            Country: "United States, Germany, Australia",
            Awards: "12 wins & 20 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "6.1/10" },
                { Source: "Metacritic", Value: "59/100" },
            ],
            Metascore: "59",
            imdbRating: "6.1",
            imdbVotes: "399,328",
            imdbID: "tt0120755",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$215,409,889",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible - Dead Reckoning Part One",
            Year: "2023",
            Rated: "PG-13",
            Released: "12 Jul 2023",
            Runtime: "163 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Christopher McQuarrie",
            Writer: "Bruce Geller, Christopher McQuarrie, Erik Jendresen",
            Actors: "Tom Cruise, Hayley Atwell, Ving Rhames",
            Plot: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
            Language: "English, Italian, Russian, French",
            Country: "United States",
            Awards: "Nominated for 2 Oscars. 18 wins & 67 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.6/10" },
                { Source: "Rotten Tomatoes", Value: "96%" },
                { Source: "Metacritic", Value: "81/100" },
            ],
            Metascore: "81",
            imdbRating: "7.6",
            imdbVotes: "300,838",
            imdbID: "tt9603212",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$172,640,980",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible - The Final Reckoning",
            Year: "2025",
            Rated: "PG-13",
            Released: "23 May 2025",
            Runtime: "169 min",
            Genre: "Action, Adventure, Thriller",
            Director: "Christopher McQuarrie",
            Writer: "Bruce Geller, Erik Jendresen, Christopher McQuarrie",
            Actors: "Tom Cruise, Hayley Atwell, Ving Rhames",
            Plot: "Our lives are the sum of our choices. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
            Language: "English, French, Russian",
            Country: "United Kingdom, United States",
            Awards: "4 wins & 5 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                { Source: "Internet Movie Database", Value: "7.4/10" },
                { Source: "Rotten Tomatoes", Value: "80%" },
                { Source: "Metacritic", Value: "67/100" },
            ],
            Metascore: "67",
            imdbRating: "7.4",
            imdbVotes: "111,153",
            imdbID: "tt9603208",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$194,753,227",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
        },
        {
            Title: "Mission: Impossible",
            Year: "1966–1973",
            Rated: "TV-PG",
            Released: "17 Sep 1966",
            Runtime: "50 min",
            Genre: "Action, Crime, Thriller",
            Director: "N/A",
            Writer: "Bruce Geller",
            Actors: "Peter Graves, Barbara Bain, Greg Morris",
            Plot: "An elite covert operations unit carries out highly sensitive missions subject to official denial in the event of failure, death or capture.",
            Language: "English",
            Country: "United States",
            Awards: "Won 10 Primetime Emmys. 20 wins & 39 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTg3MDQ4ODQwNF5BMl5BanBnXkFtZTcwODMwODM0MQ@@._V1_SX300.jpg",
            Ratings: [{ Source: "Internet Movie Database", Value: "7.9/10" }],
            Metascore: "N/A",
            imdbRating: "7.9",
            imdbVotes: "12,487",
            imdbID: "tt0060009",
            Type: "series",
            totalSeasons: "7",
            Response: "True",
        },
        {
            Title: "Mission: Impossible",
            Year: "1988–1990",
            Rated: "TV-PG",
            Released: "23 Oct 1988",
            Runtime: "33S min",
            Genre: "Action, Adventure, Crime",
            Director: "N/A",
            Writer: "Bruce Geller",
            Actors: "Peter Graves, Thaao Penghlis, Antony Hamilton",
            Plot: "An elite covert operations unit carries out highly sensitive missions subject to official denial in the event of failure, death or capture.",
            Language: "English",
            Country: "United States",
            Awards: "Nominated for 2 Primetime Emmys. 2 nominations total",
            Poster: "https://m.media-amazon.com/images/M/MV5BZDZkMWE2ZmEtNzQ0NC00MmU2LThkMzEtZTM0YjU5NGMxM2RjXkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [{ Source: "Internet Movie Database", Value: "7.5/10" }],
            Metascore: "N/A",
            imdbRating: "7.5",
            imdbVotes: "4,483",
            imdbID: "tt0094511",
            Type: "series",
            totalSeasons: "2",
            Response: "True",
        },
    ]);

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
    const movies = `

        
    `;

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
                    <div className="movie-card">
                        <div className="poster">
                            <img
                                src={SearchResult[0].Poster}
                                alt={SearchResult[0].Title}
                            />
                        </div>

                        <div className="details">
                            <h2 className="title">
                                {SearchResult[0].Title}
                                <span className="rating">
                                    ⭐ {SearchResult[0].imdbRating}
                                </span>
                            </h2>
                            <p className="meta">
                                {SearchResult[0].Runtime} &nbsp; • &nbsp;{" "}
                                {SearchResult[0].Genre}
                            </p>
                            <button className="watchlist-btn">
                                ＋ Watchlist
                            </button>
                            <p className="plot">{SearchResult[0].Plot}</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="poster">
                            <img
                                src={SearchResult[1].Poster}
                                alt={SearchResult[1].Title}
                            />
                        </div>

                        <div className="details">
                            <h2 className="title">
                                {SearchResult[1].Title}
                                <span className="rating">
                                    ⭐ {SearchResult[1].imdbRating}
                                </span>
                            </h2>
                            <p className="meta">
                                {SearchResult[1].Runtime} &nbsp; • &nbsp;{" "}
                                {SearchResult[1].Genre}
                            </p>
                            <button className="watchlist-btn">
                                ＋ Watchlist
                            </button>
                            <p className="plot">{SearchResult[1].Plot}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
