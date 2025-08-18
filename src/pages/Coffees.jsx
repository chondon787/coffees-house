import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
 

const Coffees = () => {
  const data = useLoaderData();
  const [coffees,setCoffees] = useState([])

   useEffect(() => {
    if (data) {
      setCoffees(data);
    }
  }, [data]);

  const handleSort =(sortBy)=>{
    if(sortBy == 'popularity'){
      const sorted = [...data].sort((a,b)=> b.popularity- a.popularity)
          setCoffees(sorted)
    }else if (sortBy=='rating'){
       const sorted = [...data].sort((a,b)=> b.rating- a.rating)
          setCoffees(sorted)
    }
  }

  return (
    <>
    <div className="flex justify-between items-center mb-4">
        <p className="text-3xl text-warning">Short Coffee's by popularity & Rating -</p>
        <div  className="flex flex-row gap-3">
            <button onClick={()=>handleSort('popularity')} className="btn btn-info">Sort by Popularity</button>
            <button onClick={()=>handleSort('rating')} className="btn btn-info">Sort By Rating</button>
        </div>
    </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {coffees.map((card) => (
          <Cards key={card.id} card={card}></Cards>
        ))}
      </div>
    </>
  );
};

export default Coffees;
 