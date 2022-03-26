import React from 'react';

const AddBookForm = () => {
  return (
    <form>
      <input name='title' placeholder='Book title' />
      <input name='author' placeholder='Author' />
      <button type='button' onClick={null}>ADD BOOK</button>
    </form>
  )
}

export default AddBookForm;