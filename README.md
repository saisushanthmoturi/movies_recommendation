# Book and Movie Recommendation System

This project is a Book and Movie Recommendation System built with Next.js. It allows users to receive personalized recommendations based on their selected themes for books and movies.

## Features

- Fetches real-time data for books and movies based on user-selected themes.
- Displays a list of recommended books and movies.
- User-friendly interface for submitting preferences.
- Responsive design for optimal viewing on various devices.

## Project Structure

```
recommendation-system
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── books
│   │   │   │   └── route.ts
│   │   │   └── movies
│   │   │       └── route.ts
│   │   ├── books
│   │   │   └── page.tsx
│   │   ├── movies
│   │   │   └── page.tsx
│   │   ├── recommendations
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── BookCard.tsx
│   │   ├── MovieCard.tsx
│   │   ├── RecommendationForm.tsx
│   │   └── ThemeSelector.tsx
│   ├── lib
│   │   ├── api.ts
│   │   └── types.ts
│   └── utils
│       └── helpers.ts
├── .env.local
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/recommendation-system.git
   ```

2. Navigate to the project directory:
   ```
   cd recommendation-system
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables.

## Usage

To run the application in development mode, use the following command:

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **Books API**: Fetches book data based on themes.
  - Endpoint: `/api/books`
  
- **Movies API**: Fetches movie data based on themes.
  - Endpoint: `/api/movies`

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.