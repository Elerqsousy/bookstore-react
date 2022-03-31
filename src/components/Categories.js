import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <div>
      <span>{status}</span>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
    </div>
  );
};

export default Categories;
