import React, { useState } from 'react';
import ThemeSelector from './ThemeSelector';

interface Book {
  id: string | number;
  title: string;
  author: string;
  imageUrl?: string;
  description?: string;
}

interface Movie {
  id: string | number;
  title: string;
  director?: string;
  imageUrl?: string;
  description?: string;
  year?: number;
}

interface Recommendations {
  books: Book[];
  movies: Movie[];
}

interface RecommendationFormProps {
  onRecommendationsReceived: (recommendations: Recommendations) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onRecommendationsReceived }) => {
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [mediaType, setMediaType] = useState<'both' | 'books' | 'movies'>('both');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (selectedThemes.length === 0) {
            setError('Please select at least one theme');
            return;
        }
        
        setLoading(true);
        setError(null);
        
        try {
            // Join themes with commas for the query
            const themeQuery = selectedThemes.join(',');
            
            let booksData: Book[] = [];
            let moviesData: Movie[] = [];
            
            // Fetch based on selected media type
            if (mediaType === 'both' || mediaType === 'books') {
                const booksResponse = await fetch(`/api/books?theme=${themeQuery}`);
                if (!booksResponse.ok) throw new Error('Failed to fetch book recommendations');
                booksData = await booksResponse.json();
            }
            
            if (mediaType === 'both' || mediaType === 'movies') {
                const moviesResponse = await fetch(`/api/movies?theme=${themeQuery}`);
                if (!moviesResponse.ok) throw new Error('Failed to fetch movie recommendations');
                moviesData = await moviesResponse.json();
            }
            
            onRecommendationsReceived({ books: booksData, movies: moviesData });
            
        } catch (err: any) {
            setError(err.message || 'An error occurred while fetching recommendations');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Get Personalized Recommendations
                </h2>
                
                <div className="form-group">
                    <ThemeSelector 
                        selectedThemes={selectedThemes} 
                        onThemeChange={setSelectedThemes} 
                    />
                </div>
                
                <div className="form-group">
                    <label className="form-label">What are you interested in?</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <label className="checkbox-item">
                            <input
                                type="radio"
                                name="mediaType"
                                checked={mediaType === 'both'}
                                onChange={() => setMediaType('both')}
                            />
                            <span style={{ marginLeft: '0.5rem' }}>Books & Movies</span>
                        </label>
                        <label className="checkbox-item">
                            <input
                                type="radio"
                                name="mediaType"
                                checked={mediaType === 'books'}
                                onChange={() => setMediaType('books')}
                            />
                            <span style={{ marginLeft: '0.5rem' }}>Books Only</span>
                        </label>
                        <label className="checkbox-item">
                            <input
                                type="radio"
                                name="mediaType"
                                checked={mediaType === 'movies'}
                                onChange={() => setMediaType('movies')}
                            />
                            <span style={{ marginLeft: '0.5rem' }}>Movies Only</span>
                        </label>
                    </div>
                </div>
                
                {error && (
                    <div className="error-message" style={{ marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}
                
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    {loading ? 'Finding Recommendations...' : 'Get Recommendations'}
                </button>
            </form>
        </div>
    );
};

export default RecommendationForm;