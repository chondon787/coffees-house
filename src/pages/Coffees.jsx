 
import React from 'react';
import { useLoaderData } from 'react-router-dom';
 
import Cards from '../components/Cards';

const Coffees = () => {
    const data = useLoaderData();
    console.log(data)
    return (
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                data.map(card => <Cards key={card.id} card={card}></Cards>)
}
        </div>
    );
};

export default Coffees;