import React from 'react';
import Book from './Book';

const BookCard = (props) => (
  <div>
    <Book
      category={props.category}
      title={props.title}
      author={props.author}
    />
    <button type="button" onClick={null}>
      Remove
    </button>
  </div>
);

export default BookCard;
