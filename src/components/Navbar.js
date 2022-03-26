import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const routLinks = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        {routLinks.map((rout) => {
          return (
            <li key={rout.id}>
              <NavLink to={rout.path}>{rout.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
