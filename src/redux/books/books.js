import { v4 as uuid } from 'uuid';

const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';

const defaultState = [
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

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: action.category,
          id: uuid(),
        },
      ];
    case DELETE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(bookName, authorName, category) {
  return {
    type: ADD,
    title: bookName,
    author: authorName,
    category,
  };
}

export function deleteBook(id) {
  return {
    type: DELETE,
    id,
  };
}
