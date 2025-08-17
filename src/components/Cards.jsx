import React from "react";

const Cards = ({ card }) => {
  // console.log(card)
  const { image, name, category, type, rating, popularity } = card || {};
  return (
    <div>
      <div className=" bg-base-200 rounded-md p-3">
        <figure className="     transition hover:scale-105">
          <img
            src={image}
            alt=""
            className="rounded-lg w-full h-60 object-cover"
          />
        </figure>
        <div className="   text-start">
          <h2 className=" mt-3 font-bold text-warning">{name}</h2>
          <p>
            Category : <span className="font-serif text-2xl"> {category} </span>{" "}
          </p>
          <p>Type : {type} </p>
          <p>Rating : {rating} </p>
          <p>Popularity : {popularity} </p>

          <div className="card-actions mt-2">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
