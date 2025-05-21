export const formatBookData = (book) => {
    return {
        title: book.title,
        author: book.author,
        coverImage: book.coverImage,
        themes: book.themes,
    };
};

export const formatMovieData = (movie) => {
    return {
        title: movie.title,
        director: movie.director,
        posterImage: movie.posterImage,
        themes: movie.themes,
    };
};

export const filterByTheme = (items, theme) => {
    return items.filter(item => item.themes.includes(theme));
};