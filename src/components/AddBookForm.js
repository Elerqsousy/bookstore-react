import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const addToStore = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const author = e.target[1].value;

    dispatch(addBook(title, author, 'undefined'));

    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <form onSubmit={addToStore}>
      <input name="title" placeholder="Book title" required />
      <input name="author" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBookForm;
