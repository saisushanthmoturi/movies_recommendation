"use client"
import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';

interface Movie {
  id: string | number;
  title: string;
  director?: string;
  imageUrl?: string;
  description?: string;
  year?: number;
  releaseDate?: string;
}

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/api/movies');
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                setMovies(data);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Filter movies based on search term
    const filteredMovies = filter
        ? movies.filter(movie => 
            movie.title.toLowerCase().includes(filter.toLowerCase()) ||
            (movie.director && movie.director.toLowerCase().includes(filter.toLowerCase())) ||
            (movie.description && movie.description.toLowerCase().includes(filter.toLowerCase()))
          )
        : movies;

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading movies...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">Error: {error}</p>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Movie Recommendations</h1>
            
            <div style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search movies by title, director, or description..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="form-control"
                    style={{ maxWidth: '500px', margin: '0 auto', display: 'block' }}
                />
            </div>
            
            {filteredMovies.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    No movies found matching your search criteria.
                </p>
            ) : (
                <div className="movie-list">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoviesPage;