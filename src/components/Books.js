import React from 'react';
import { v4 as uuid } from 'uuid';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';

const Books = () => {
  const bookList = [
    {
      id: uuid(),
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collin',
    },
    {
      id: uuid(),
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbet',
    },
    {
      id: uuid(),
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collin',
    },
  ];

  return (
    <div>
      {bookList.map((book) => (
        <BookCard
          key={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
