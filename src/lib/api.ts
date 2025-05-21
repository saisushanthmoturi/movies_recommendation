
// Types
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

// Mock data for books with themes - extensive professional collection
const bookData: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
    description: "A portrait of the Jazz Age in all of its decadence and excess, Gatsby captured the spirit of the author's generation and earned itself a permanent place in American mythology.",
    themes: ["Romance", "History", "Drama", "American Literature"]
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    imageUrl: "https://images.unsplash.com/photo-1576504865154-4a8d0e0b2bd3?q=80&w=400&auto=format&fit=crop",
    description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl.",
    themes: ["Drama", "History", "Mystery", "Social Justice"]
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop",
    description: "Among the seminal texts of the 20th century, 1984 paints the bleak picture of a society in which all information is controlled by the government and independent thought is entirely suppressed.",
    themes: ["Science Fiction", "Dystopian", "Political Fiction", "Classics"]
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    imageUrl: "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?q=80&w=400&auto=format&fit=crop",
    description: "An epic high-fantasy masterpiece, it began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. A grand adventure filled with peril and hope.",
    themes: ["Fantasy", "Adventure", "Epic", "Mythology"]
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imageUrl: "https://images.unsplash.com/photo-1531165838266-1e3a282df2e4?q=80&w=400&auto=format&fit=crop",
    description: "Austen's most popular novel, the story of the Bennet sisters and their marriages, highlighting the societal expectations and limitations placed on women in the early 19th century.",
    themes: ["Romance", "History", "Classical Literature", "Social Commentary"]
  },
  {
    id: 6,
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    imageUrl: "https://images.unsplash.com/photo-1618945524163-32451704cbb8?q=80&w=400&auto=format&fit=crop",
    description: "A chilling and mysterious tale about four seekers who arrive at a notoriously unfriendly pile called Hill House. A perfect work of unnerving terror.",
    themes: ["Horror", "Mystery", "Gothic", "Supernatural"]
  },
  {
    id: 7,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    description: "A groundbreaking narrative of humanity's creation and evolution that explores how biology and history have defined us and enhanced our understanding of what it means to be 'human'.",
    themes: ["History", "Biography", "Science", "Anthropology"]
  },
  {
    id: 8,
    title: "Dune",
    author: "Frank Herbert",
    imageUrl: "https://images.unsplash.com/photo-1610373188926-53532e3377d6?q=80&w=400&auto=format&fit=crop",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib, avenger for a people and prophet whose fate would change forever.",
    themes: ["Science Fiction", "Adventure", "Politics", "Philosophy"]
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    imageUrl: "https://images.unsplash.com/photo-1544947987-f82c9a7636d9?q=80&w=400&auto=format&fit=crop",
    description: "A magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as fabulous as any ever found.",
    themes: ["Philosophy", "Adventure", "Spirituality", "Self-Discovery"]
  },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    imageUrl: "https://images.unsplash.com/photo-1528394038371-92c3c664636a?q=80&w=400&auto=format&fit=crop",
    description: "The story of the mental anguish and moral dilemmas of Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill a pawnbroker for her money.",
    themes: ["Psychological", "Drama", "Philosophy", "Classics"]
  },
  {
    id: 11,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    imageUrl: "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?q=80&w=400&auto=format&fit=crop",
    description: "In a dark vision of the near future, twelve boys and twelve girls are forced to appear in a live TV show called The Hunger Games. There is only one rule: kill or be killed.",
    themes: ["Science Fiction", "Dystopian", "Adventure", "Young Adult"]
  },
  {
    id: 12,
    title: "Gone Girl",
    author: "Gillian Flynn",
    imageUrl: "https://images.unsplash.com/photo-1568736333610-eae6e0ab9206?q=80&w=400&auto=format&fit=crop",
    description: "A masterfully plotted thriller about a marriage gone terribly, terribly wrong, with a twist that will leave you breathless.",
    themes: ["Mystery", "Thriller", "Psychological", "Crime"]
  },
  {
    id: 13,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    imageUrl: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=400&auto=format&fit=crop",
    description: "A shocking psychological thriller about a woman who shoots her husband five times in the face, and then never speaks another word.",
    themes: ["Mystery", "Psychological", "Thriller", "Crime"]
  },
  {
    id: 14,
    title: "The Martian",
    author: "Andy Weir",
    imageUrl: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=400&auto=format&fit=crop",
    description: "After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, astronaut Mark Watney finds himself stranded and completely alone on Mars.",
    themes: ["Science Fiction", "Adventure", "Survival", "Space"]
  },
  {
    id: 15,
    title: "Becoming",
    author: "Michelle Obama",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop",
    description: "In her memoir, Michelle Obama chronicles the experiences that have shaped her—from her childhood on the South Side of Chicago to her time spent at the White House.",
    themes: ["Biography", "Memoir", "Politics", "Inspiration"]
  },
  {
    id: 16,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    imageUrl: "https://images.unsplash.com/photo-1555679486-e341a5a14b3d?q=80&w=400&auto=format&fit=crop",
    description: "The riveting first-person narrative of a young man who grows to be the most notorious magician his world has ever seen.",
    themes: ["Fantasy", "Adventure", "Magic", "Coming-of-Age"]
  },
  {
    id: 17,
    title: "Educated",
    author: "Tara Westover",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400&auto=format&fit=crop",
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    themes: ["Biography", "Memoir", "Education", "Self-Discovery"]
  },
  {
    id: 18,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    imageUrl: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?q=80&w=400&auto=format&fit=crop",
    description: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum.",
    themes: ["Mystery", "Thriller", "Conspiracy", "History"]
  },
  {
    id: 19,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
    description: "A poignant story of one college student's romantic coming-of-age during the late 1960s, a time when Japanese students were protesting the established order.",
    themes: ["Romance", "Drama", "Coming-of-Age", "Cultural"]
  },
  {
    id: 20,
    title: "Life of Pi",
    author: "Yann Martel",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop",
    description: "After a shipwreck, a sixteen-year-old boy finds himself stranded on a lifeboat with a hyena, a zebra, an orangutan, and a Bengal tiger.",
    themes: ["Adventure", "Spirituality", "Survival", "Philosophy"]
  }
];

// Mock data for movies with themes - extensive professional collection
const movieData: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400&auto=format&fit=crop",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage.",
    themes: ["Science Fiction", "Adventure", "Mystery", "Psychological"]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop",
    description: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at Shawshank prison. Over the course of his extended stay, he forms a friendship with Red, experiences brutality of prison life, adapts, helps the warden, and ultimately finds redemption.",
    themes: ["Drama", "Friendship", "Hope", "Prison"]
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&auto=format&fit=crop",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. A complex, character-driven story that elevated the superhero genre to new heights.",
    themes: ["Action", "Adventure", "Crime", "Superhero"]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&auto=format&fit=crop",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. A groundbreaking film known for its eclectic dialogue, ironic mix of humor and violence, and nonlinear storytelling.",
    themes: ["Drama", "Crime", "Noir", "Nonlinear"]
  },
  {
    id: 5,
    title: "The Matrix",
    director: "Lana and Lilly Wachowski",
    year: 1999,
    imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=400&auto=format&fit=crop",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. A visually revolutionary film that blends philosophy, cyberpunk, and martial arts into a thought-provoking action film.",
    themes: ["Science Fiction", "Action", "Cyberpunk", "Philosophy"]
  },
  {
    id: 6,
    title: "The Notebook",
    director: "Nick Cassavetes",
    year: 2004,
    imageUrl: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?q=80&w=400&auto=format&fit=crop",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are separated by their social differences. Years later, they meet again, and the story of their love unfolds through a notebook read by an elderly man to a fellow nursing home patient.",
    themes: ["Romance", "Drama", "Love Story", "Period Drama"]
  },
  {
    id: 7,
    title: "The Conjuring",
    director: "James Wan",
    year: 2013,
    imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&auto=format&fit=crop",
    description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Based on a true story, this supernatural horror film revitalized the haunted house genre with its atmospheric tension and genuine scares.",
    themes: ["Horror", "Supernatural", "Based on True Events", "Paranormal"]
  },
  {
    id: 8,
    title: "Gandhi",
    director: "Richard Attenborough",
    year: 1982,
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=400&auto=format&fit=crop",
    description: "Biography of Mahatma Gandhi, the lawyer who became the famed leader of the Indian revolts against the British through his philosophy of non-violent protest. This epic historical drama spans Gandhi's life from his formative experience as a young Indian lawyer in South Africa to his leadership of the independence movement in India.",
    themes: ["Biography", "History", "Politics", "Independence"]
  },
  {
    id: 9,
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. A masterful blend of dark comedy, social satire, and thriller elements.",
    themes: ["Drama", "Thriller", "Social Commentary", "Foreign"]
  },
  {
    id: 10,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    imageUrl: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=400&auto=format&fit=crop",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A defining work in American cinema that explores themes of family, power, honor, and corruption.",
    themes: ["Crime", "Drama", "Family", "Mafia"]
  },
  {
    id: 11,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    imageUrl: "https://images.unsplash.com/photo-1603729336521-a8e2e789ee65?q=80&w=400&auto=format&fit=crop",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are transformed into beasts. A breathtaking animated fantasy that remains the highest-grossing film in Japanese history.",
    themes: ["Animation", "Fantasy", "Coming-of-Age", "Japanese"]
  },
  {
    id: 12,
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=400&auto=format&fit=crop",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential. An intense psychological drama about the pursuit of perfection.",
    themes: ["Drama", "Music", "Psychological", "Teacher-Student"]
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    imageUrl: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?q=80&w=400&auto=format&fit=crop",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. The highest-grossing film of its time, combining romance, history, and groundbreaking visual effects.",
    themes: ["Romance", "Disaster", "Historical", "Love Story"]
  },
  {
    id: 14,
    title: "Get Out",
    director: "Jordan Peele",
    year: 2017,
    imageUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=400&auto=format&fit=crop",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point. A groundbreaking horror film that explores race and privilege through the lens of psychological terror.",
    themes: ["Horror", "Mystery", "Social Commentary", "Psychological"]
  },
  {
    id: 15,
    title: "The Silence of the Lambs",
    director: "Jonathan Demme",
    year: 1991,
    imageUrl: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=400&auto=format&fit=crop",
    description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims. One of only three films to win all five major Academy Awards.",
    themes: ["Thriller", "Crime", "Psychological", "Detective"]
  },
  {
    id: 16,
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    imageUrl: "https://images.unsplash.com/photo-1543536448-1e76fc2795bf?q=80&w=400&auto=format&fit=crop",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future. A modern musical that pays homage to classic Hollywood while exploring contemporary themes of ambition and love.",
    themes: ["Musical", "Romance", "Drama", "Jazz"]
  },
  {
    id: 17,
    title: "The Social Network",
    director: "David Fincher",
    year: 2010,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop",
    description: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
    themes: ["Biography", "Drama", "Technology", "Business"]
  },
  {
    id: 18,
    title: "Coco",
    director: "Lee Unkrich",
    year: 2017,
    imageUrl: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa8?q=80&w=400&auto=format&fit=crop",
    description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer. A visually stunning celebration of Mexican culture and the importance of family.",
    themes: ["Animation", "Family", "Cultural", "Music"]
  },
  {
    id: 19,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=400&auto=format&fit=crop",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A visually spectacular and emotionally resonant science fiction epic that explores love, sacrifice, and the human drive to survive.",
    themes: ["Science Fiction", "Space", "Adventure", "Family"]
  },
  {
    id: 20,
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1596123068611-c89d922a0f0a?q=80&w=400&auto=format&fit=crop",
    description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    themes: ["Comedy", "Adventure", "Quirky", "Period Drama"]
  },
  {
    id: 21,
    title: "The Avengers",
    director: "Joss Whedon",
    year: 2012,
    imageUrl: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=400&auto=format&fit=crop",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity. A landmark superhero film that established the modern blockbuster franchise model.",
    themes: ["Superhero", "Action", "Adventure", "Team-up"]
  },
  {
    id: 22,
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    year: 2004,
    imageUrl: "https://images.unsplash.com/photo-1621252179027-65f7c05d6579?q=80&w=400&auto=format&fit=crop",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories. A unique and heartfelt exploration of love, memory, and human connection.",
    themes: ["Romance", "Science Fiction", "Psychological", "Drama"]
  },
  {
    id: 23,
    title: "Black Panther",
    director: "Ryan Coogler",
    year: 2018,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=400&auto=format&fit=crop",
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past. A groundbreaking superhero film celebrating African culture and identity.",
    themes: ["Superhero", "Action", "Cultural", "Afrofuturism"]
  },
  {
    id: 24,
    title: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&auto=format&fit=crop",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate. A brutal, unflinching look at organized crime.",
    themes: ["Crime", "Biography", "Mafia", "Drama"]
  },
  {
    id: 25,
    title: "Your Name",
    director: "Makoto Shinkai",
    year: 2016,
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=400&auto=format&fit=crop",
    description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart? A visually stunning Japanese animated film that became a global phenomenon.",
    themes: ["Animation", "Romance", "Fantasy", "Japanese"]
  }
];

/**
 * Calculate a recommendation score for an item based on theme matches
 * @param itemThemes The themes of the item
 * @param selectedThemes The user's selected themes
 * @returns A score representing how well the item matches the user's preferences
 */
function calculateRecommendationScore(itemThemes: string[] | undefined, selectedThemes: string[]): number {
  if (!itemThemes || itemThemes.length === 0) return 0;
  
  let score = 0;
  for (const theme of selectedThemes) {
    for (const itemTheme of itemThemes) {
      // Exact match gives higher score
      if (itemTheme.toLowerCase() === theme.toLowerCase()) {
        score += 10;
      } 
      // Partial match gives lower score
      else if (itemTheme.toLowerCase().includes(theme.toLowerCase()) || 
               theme.toLowerCase().includes(itemTheme.toLowerCase())) {
        score += 5;
      }
    }
  }
  
  // Bonus for having multiple matching themes
  const uniqueMatches = new Set(
    itemThemes.filter(t => 
      selectedThemes.some(st => 
        t.toLowerCase().includes(st.toLowerCase()) || 
        st.toLowerCase().includes(t.toLowerCase())
      )
    )
  );
  
  // Bonus points for diversity of matches
  score += uniqueMatches.size * 3;
  
  return score;
}

/**
 * Fetch books by theme
 * @param theme comma-separated list of themes
 * @returns filtered and sorted list of books by recommendation score
 */
export async function fetchBooksByTheme(theme: string): Promise<Book[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (!theme) return bookData;
  
  const themes = theme.split(',').map(t => t.trim());
  
  // Filter books with at least one matching theme
  const matchedBooks = bookData.filter(book => {
    if (!book.themes) return false;
    return themes.some(t => book.themes?.some(bookTheme => 
      bookTheme.toLowerCase().includes(t.toLowerCase()) || 
      t.toLowerCase().includes(bookTheme.toLowerCase())
    ));
  });
  
  // Calculate score for each book and sort by score (highest first)
  return matchedBooks
    .map(book => ({
      ...book,
      score: calculateRecommendationScore(book.themes, themes)
    }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .map(({ score, ...book }) => book); // Remove the score property before returning
}

/**
 * Fetch movies by theme
 * @param theme comma-separated list of themes
 * @returns filtered and sorted list of movies by recommendation score
 */
export async function fetchMoviesByTheme(theme: string): Promise<Movie[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (!theme) return movieData;
  
  const themes = theme.split(',').map(t => t.trim());
  
  // Filter movies with at least one matching theme
  const matchedMovies = movieData.filter(movie => {
    if (!movie.themes) return false;
    return themes.some(t => movie.themes?.some(movieTheme => 
      movieTheme.toLowerCase().includes(t.toLowerCase()) || 
      t.toLowerCase().includes(movieTheme.toLowerCase())
    ));
  });
  
  // Calculate score for each movie and sort by score (highest first)
  return matchedMovies
    .map(movie => ({
      ...movie,
      score: calculateRecommendationScore(movie.themes, themes)
    }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .map(({ score, ...movie }) => movie); // Remove the score property before returning
}
