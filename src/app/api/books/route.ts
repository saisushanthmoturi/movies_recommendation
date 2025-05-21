import { NextResponse } from 'next/server';
import { fetchBooksByTheme } from '../../../lib/api';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const theme = searchParams.get('theme') || '';
    
    try {
        // Get books from our API service
        const books = await fetchBooksByTheme(theme);
        return NextResponse.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json(
            { error: 'Failed to fetch books' },
            { status: 500 }
        );
    }
}