import { useEffect, useState } from "react";
import { getFavoriteList, removeFavorites } from "../utilitise/utilitise.js";
import Cards from "../components/Cards";
 

const Dashboard = () => {
    const [coffees, setCoffees]= useState([]);
    useEffect(()=>{
      const favorites = getFavoriteList();
      setCoffees(favorites)
    },[])
   function handleRemove(id){
    removeFavorites(id)
    const favorites = getFavoriteList();
      setCoffees(favorites)
   }
 
  return (
    <>
      <div>
        <div className="text-center mb-5">
        <h1 className="text-3xl text-warning font-thin mb-1">
          Wellcome to dashboard
        </h1>
        <p className="text-gray-300">
          Manage coffees that you have provouse added as favorite.you can view
          or remove from here
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {coffees.map((card) => (
          <Cards handleRemove={handleRemove} key={card.id} card={card}></Cards>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default Dashboard;
