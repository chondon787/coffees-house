import { Link, useLocation } from "react-router-dom";

 
import { FaRegTrashAlt } from "react-icons/fa";
 
 

const Cards = ({ card,handleRemove  }) => {
  // console.log(card)
  const {pathname}= useLocation()
  
   
   
  const {id, image, name, category, type, rating, popularity } = card || {};
  return (
    <div className=" ">
      <div className=" bg-base-200 rounded-md p-3 relative">
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

          <Link to={`/coffee/${id}`} className="card-actions mt-2">
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      {
         pathname === '/dashboard' && <div onClick={()=> handleRemove(id)}  className="absolute hover:scale-125 top-0 cursor-pointer right-0 bg-warning rounded-full p-2"><FaRegTrashAlt /></div>
      }
      </div>
    </div>
  );
};

export default Cards;
