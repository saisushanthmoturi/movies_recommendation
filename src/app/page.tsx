import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container">
      <section style={{ 
        textAlign: 'center', 
        padding: '3rem 1rem',
        maxWidth: '800px',
        margin: '0 auto' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          Welcome to <span style={{ color: 'var(--primary-color)' }}>IntelliRec</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Discover your next favorite books and movies with our personalized recommendation system.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <Link href="/recommendations" className="btn btn-primary">
            Get Recommendations
          </Link>
          <Link href="/books" className="btn btn-secondary">
            Browse Books
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>How It Works</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3>1. Choose Your Preferences</h3>
            <p>Tell us about your favorite genres, themes, and the movies or books you've enjoyed in the past.</p>
          </div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3>2. Get Personalized Recommendations</h3>
            <p>Our algorithm analyzes your preferences to suggest books and movies tailored just for you.</p>
          </div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3>3. Rate and Improve</h3>
            <p>Rate the recommendations to help our system better understand your taste and improve future suggestions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Categories</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          textAlign: 'center'
        }}>
          {['Adventure', 'Romance', 'Sci-Fi', 'Mystery', 'Fantasy', 'Biography'].map(category => (
            <div key={category} style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--card-background)', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }} className="card">
              {category}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}