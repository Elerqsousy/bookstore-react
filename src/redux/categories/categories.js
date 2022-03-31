const STATUS = 'bookstore/categories/STATUS';
const CATEGORIES = 'bookstore/categories/CATEGORIES';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    case CATEGORIES:
      return [...state, action.category];
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: STATUS,
  };
}

export function addCategory(category) {
  return {
    type: CATEGORIES,
    category,
  };
}
