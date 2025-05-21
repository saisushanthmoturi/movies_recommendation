import React from 'react';

interface Book {
  id: string | number;
  title: string;
  author: string;
  imageUrl?: string;
  description?: string;
  themes?: string[];
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
    return (
        <div className="book-card">
            {book.imageUrl && (
                <div className="book-cover">
                    <img 
                        src={book.imageUrl} 
                        alt={`${book.title} cover`}
                        className="book-cover-image"
                    />
                </div>
            )}
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">by {book.author}</p>
            {book.description && <p className="book-description">{book.description}</p>}
            {book.themes && book.themes.length > 0 && (
                <div className="book-themes">
                    {book.themes.map(theme => (
                        <span key={theme} className="theme-tag">{theme}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookCard;