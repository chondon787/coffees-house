import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Cards from './Cards';
 

const CoffeeCards = () => {
    const {category} = useParams();
    const data = useLoaderData();
     const [coffees, setCoffees] = useState([]);
     useEffect(() => {
        if(category){
            const filterByCategory = [...data].filter(coffee => coffee.category === category);
        setCoffees(filterByCategory)
        }
        else{
            setCoffees(data.slice(0,3))
        }
    },[data, category]);
    
    return (
        <>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                coffees.map(card => <Cards card={card} key={card.id}></Cards>)
            }
        </div>
        <div className='mt-6 text-right mb-3'>
           <NavLink to='/coffees'>  <button className='btn btn-info'>View All</button></NavLink>
        </div>
        </>
    );
};

export default CoffeeCards;