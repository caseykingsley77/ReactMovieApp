import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Rocky 1", release_date: "1998" },
    { id: 2, title: "Rocky 2", release_date: "2000" },
    { id: 3, title: "Rocky 3", release_date: "2002" },
    { id: 4, title: "Rocky 4", release_date: "2004" },
    { id: 5, title: "Rocky 5", release_date: "2008" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
