import React from 'react';
import { useFetch } from '../hooks/hooks';
import BookShelf from './BookShelf';
import Panel from './Panel';
import BookCard from "../components/BookCard.jsx"


function StatusShelf({ status, title }) {
    const { 
        data: books, 
        setData: setBooks,
        loading, 
        error 
    } = useFetch(`http://localhost:4000/api/books?${status}`, [], [status]);
    
const filteredBooks = books.filter(el => el.status === status);
  return (
    <BookShelf books={books} loading={loading} error={error}>
        <Panel title={title} >
                {filteredBooks.map(book => <BookCard key={book.id} book={book} /> )}
        </Panel>
    </BookShelf>
  );
}

export default StatusShelf;
