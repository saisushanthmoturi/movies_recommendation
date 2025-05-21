import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'IntelliRec - Personalized Recommendations',
  description: 'A personalized movie and book recommender system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <nav className="navbar">
              <div className="navbar-brand">IntelliRec</div>
              <div className="nav-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/books" className="nav-link">Books</Link>
                <Link href="/movies" className="nav-link">Movies</Link>
                <Link href="/recommendations" className="nav-link">Recommendations</Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <p>&copy; {new Date().getFullYear()} IntelliRec - Personalized Recommendation System</p>
          </footer>
        </div>
      </body>
    </html>
  );
}