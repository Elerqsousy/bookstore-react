import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { deleteBook } from '../redux/books/books';

const BookCard = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Book
        category={category}
        title={title}
        author={author}
      />
      <button type="button" onClick={() => { dispatch(deleteBook(id)); }}>
        Remove
      </button>
    </div>
  );
};

BookCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookCard;
