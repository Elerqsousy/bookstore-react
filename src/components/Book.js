import React from 'react';

const Book = (props) => {
  return (
    <div>
      <span>{props.category}</span>
      <h2>{props.title}</h2>
      <span>{props.author}</span>
    </div>
  )
}

export default Book;