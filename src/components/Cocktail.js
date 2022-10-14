import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Cocktail = ({ id, name, img, type, glass }) => {
  const { getSinglePage } = useGlobalContext();

  return (
    <article className="cocktail-container">
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>

      <div className="info">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{type}</p>
        <Link to={`/react-cocktails/cocktail/${name}`}>
          <button onClick={() => getSinglePage(id)}>Details</button>
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
