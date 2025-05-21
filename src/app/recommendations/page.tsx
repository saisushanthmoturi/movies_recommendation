"use client"
import { useState } from 'react';
import BookCard from '../../components/BookCard';
import MovieCard from '../../components/MovieCard';
import RecommendationForm from '../../components/RecommendationForm';

interface Book {
  id: string | number;
  title: string;
  author: string;
  imageUrl?: string;
  description?: string;
  themes?: string[];
}

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

interface Recommendations {
  books: Book[];
  movies: Movie[];
}

const RecommendationsPage = () => {
    const [recommendations, setRecommendations] = useState<Recommendations>({ books: [], movies: [] });
    const [loading, setLoading] = useState<boolean>(false);

    const handleRecommendationsReceived = (newRecommendations: Recommendations) => {
        setRecommendations(newRecommendations);
    };

    return (
        <div className="container recommendations-page">
            <div className="hero-section">
                <h1>Personalized Recommendations</h1>
                <p className="hero-subtitle">
                    Discover books and movies based on your interests and preferences
                </p>
            </div>
            
            <RecommendationForm onRecommendationsReceived={handleRecommendationsReceived} />
            
            {(recommendations.books.length > 0 || recommendations.movies.length > 0) && (
                <div className="recommendations-results">
                    <div className="recommendations-header">
                        <h2>Your Personalized Recommendations</h2>
                        <p className="recommendations-count">
                            {recommendations.books.length + recommendations.movies.length} items found based on your preferences
                        </p>
                    </div>
                    
                    {recommendations.books.length > 0 && (
                        <div className="recommendations-section">
                            <h2>Recommended Books</h2>
                            <p className="section-description">Literature that aligns with your selected themes</p>
                            <div className="book-list">
                                {recommendations.books.map((book) => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {recommendations.movies.length > 0 && (
                        <div className="recommendations-section">
                            <h2>Recommended Movies</h2>
                            <p className="section-description">Films that match your preferred genres and themes</p>
                            <div className="movie-list">
                                {recommendations.movies.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            {recommendations.books.length === 0 && recommendations.movies.length === 0 && (
                <div className="empty-recommendations">
                    <div className="empty-state">
                        <h3>Waiting for Your Preferences</h3>
                        <p>
                            Select your favorite themes and interests above to get personalized 
                            book and movie recommendations tailored just for you.
                        </p>
                        <div className="empty-state-image">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6V12L16 14" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="12" cy="12" r="9" stroke="var(--primary-color)" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecommendationsPage;