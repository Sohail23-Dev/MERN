import React from "react";
import products from "../Products";
import NewCard from "../Cards/NewCard";
import { useSelector } from "react-redux";

const NewHome = () => {
  const cart = useSelector((state)=> state.cart.cart);

  console.log(cart)
  return (
    <>
      <div className="flex justify-around flex-wrap gap-15 p-4">
        {products.map((prod)=> (
            <NewCard key={prod.id} ObjProd={prod}/>
        ))}
      </div>
    </>
  );
};

export default NewHome;
