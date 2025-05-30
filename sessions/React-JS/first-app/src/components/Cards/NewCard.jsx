import React from "react";
import notav from "../../assets/notav.webp";
const NewCard = ({ ObjProd }) => {
  let { image, title, category, rating, price } = ObjProd;
  // Handler for image error
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };
  return (
    <>
      <div className="card flex flex-col bg-sky-300 h-100 w-64 shadow-sm text-center rounded-xl my-6 relative top-10">
        <figure className="flex justify-center">
          <img className="h-40 w-40 rounded-3xl relative top-5" src={image} alt="Shoes" onError={handleImgError} />
        </figure>
        <div className="card-body flex flex-col flex-1 justify-between relative top-5">
          <div>
            <h2 className="card-title text-black">{title.slice(0,50)}</h2>
            <p>
              <span className="badge badge-primary relative top-1">{category}</span>
            </p>
            <p className="text-black">Rating: {rating}</p>
            <p className="text-xl font-bold text-black">${price}</p>
          </div>
          <div className="card-actions mt-auto flex justify-center">
            <button className="btn bg-red-400 rounded-2xl">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
