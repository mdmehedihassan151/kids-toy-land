import React from 'react';
import { Link } from 'react-router';

const Toy = ({singleToy}) => {
    console.log(singleToy)

    const {pictureURL, availableQuantity, rating, toyName, toyId} = singleToy
    return (
        <div className="card mx-2 shadow-sm">
  <figure>
    <img
      src={pictureURL}
      alt="Toys" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {toyName}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between items-center">
      <div>
        <Link to={`/toyDetails/${toyId}`}><button className='btn'>Toy Details</button></Link>
      </div>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{rating}</div>
      <div className="badge badge-outline">{availableQuantity}</div>
      </div>
      </div>
  </div>
</div>
    );
};

export default Toy;