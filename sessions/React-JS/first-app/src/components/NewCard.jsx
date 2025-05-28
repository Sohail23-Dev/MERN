import React from "react";
const NewCard = ({ ObjProd }) => {
  let { image, title, category, rating, price } = ObjProd;
  return (
    <>
      <div className="card flex-column content-center bg-sky-300 h-100 w-75 shadow-sm text-center rounded-xl my-6 relative top-10">
        <figure className="flex justify-center">
          <img className="h-40 w-40 rounded-3xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title.slice(0,70)}</h2>
          <p>
            <span className="badge badge-primary">{category}</span>
          </p>
          <p className="text-black">Rating: {rating}</p>
          <p className="text-xl font-bold text-black">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-400 rounded-2xl">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
