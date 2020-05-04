import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/auth/login">
          <li>Login</li>
        </Link>
        <Link to="/auth/sign-up">
          <li>Sign up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
