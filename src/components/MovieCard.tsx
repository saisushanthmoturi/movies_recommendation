import React from 'react';

interface Movie {
  id: string | number;
  title: string;
  director?: string;
  imageUrl?: string;
  description?: string;
  year?: number;
  releaseDate?: string;
  themes?: string[];
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="movie-card">
      {movie.imageUrl && (
        <div className="movie-poster">
          <img 
            src={movie.imageUrl} 
            alt={`${movie.title} poster`}
            className="movie-poster-image"
          />
        </div>
      )}
      <div className="movie-info">
        <h3 className="movie-title">{movie.title} {movie.year && `(${movie.year})`}</h3>
        {movie.director && <p className="movie-director">Directed by: {movie.director}</p>}
        {movie.releaseDate && <p className="movie-release-date">Released: {movie.releaseDate}</p>}
        {movie.description && <p className="movie-description">{movie.description}</p>}
        {movie.themes && movie.themes.length > 0 && (
          <div className="movie-themes">
            {movie.themes.map(theme => (
              <span key={theme} className="theme-tag">{theme}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;