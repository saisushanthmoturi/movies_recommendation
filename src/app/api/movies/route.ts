import { NextResponse } from 'next/server';
import { fetchMoviesByTheme } from '../../../lib/api';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const theme = searchParams.get('theme') || '';
    
    try {
        // Get movies from our API service
        const movies = await fetchMoviesByTheme(theme);
        return NextResponse.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        return NextResponse.json(
            { error: 'Failed to fetch movies' },
            { status: 500 }
        );
    }
}