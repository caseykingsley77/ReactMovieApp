import "../css/MovieCard.css";

export default function MovieCard({ movie }) {
  function onFavoriteClick() {
    return alert("Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.release_date}</h3>
      </div>
    </div>
  );
}
