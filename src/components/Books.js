import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      {bookList.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
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
