import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface BookCardProps {
    id: number;
    title: string;
    author: string;
    genre: string;
    status: number
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, genre, status }) => {
    return (
        <Card 
            variant="outlined" 
            style={{
                margin: '16px',
                border: '3px solid #b30000',
                borderColor: '#b30000', 
                borderRadius: '8px',
                transition: 'transform 0.2s',
                width: '400px', 
                height: '200px', 
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
        >
            <CardContent style={{ height: '100%' }}>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <hr />
                <Typography color="text.secondary">
                    Autor: {author}
                </Typography>
                <Typography color="text.secondary">
                    Gênero: {genre}
                </Typography>
                <Typography color="text.secondary">
                    Status: {status == 0 ? 'Disponível' : 'Emprestado'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookCard;
