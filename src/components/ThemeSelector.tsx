import React from 'react';

const themes = [
    // Core genres
    { id: 1, name: 'Adventure', color: '#4CAF50' },
    { id: 2, name: 'Romance', color: '#E91E63' },
    { id: 3, name: 'Science Fiction', color: '#2196F3' },
    { id: 4, name: 'Fantasy', color: '#9C27B0' },
    { id: 5, name: 'Mystery', color: '#FF9800' },
    { id: 6, name: 'Biography', color: '#795548' },
    { id: 7, name: 'History', color: '#607D8B' },
    { id: 8, name: 'Horror', color: '#212121' },
    // Additional genres
    { id: 9, name: 'Drama', color: '#D32F2F' },
    { id: 10, name: 'Action', color: '#F57F17' },
    { id: 11, name: 'Comedy', color: '#FFC107' },
    { id: 12, name: 'Crime', color: '#424242' },
    { id: 13, name: 'Thriller', color: '#880E4F' },
    { id: 14, name: 'Animation', color: '#00BCD4' },
    { id: 15, name: 'Family', color: '#8BC34A' },
    { id: 16, name: 'Psychological', color: '#673AB7' },
    // Specialized themes
    { id: 17, name: 'Dystopian', color: '#455A64' },
    { id: 18, name: 'Space', color: '#1A237E' },
    { id: 19, name: 'Superhero', color: '#D84315' },
    { id: 20, name: 'Classics', color: '#3E2723' },
];

interface ThemeSelectorProps {
    selectedThemes: string[];
    onThemeChange: (themes: string[]) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedThemes, onThemeChange }) => {
    const toggleTheme = (themeName: string) => {
        if (selectedThemes.includes(themeName)) {
            onThemeChange(selectedThemes.filter(t => t !== themeName));
        } else {
            onThemeChange([...selectedThemes, themeName]);
        }
    };
    
    return (
        <div className="theme-selector">
            <h3 style={{ marginBottom: '1rem' }}>Select Themes You Enjoy</h3>
            <div className="checkbox-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {themes.map((theme) => (
                    <div key={theme.id} className="checkbox-item">
                        <label 
                            style={{ 
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 16px',
                                border: `1px solid ${theme.color}`,
                                borderRadius: '20px',
                                backgroundColor: selectedThemes.includes(theme.name) 
                                    ? theme.color 
                                    : 'transparent',
                                color: selectedThemes.includes(theme.name) 
                                    ? 'white' 
                                    : theme.color,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={selectedThemes.includes(theme.name)}
                                onChange={() => toggleTheme(theme.name)}
                                style={{ display: 'none' }}
                            />
                            {theme.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeSelector;