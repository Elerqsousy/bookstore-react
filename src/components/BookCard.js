import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookCard = (props) => {
  const { category, title, author } = props;
  return (
    <div>
      <Book
        category={category}
        title={title}
        author={author}
      />
      <button type="button" onClick={null}>
        Remove
      </button>
    </div>
  );
};

BookCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
