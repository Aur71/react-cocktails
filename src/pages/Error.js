import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-wrapper">
      <h2>Oops! It's A Dead End</h2>
      <Link to="/react-cocktails">
        <button>Back home</button>
      </Link>
    </section>
  );
};

export default Error;
