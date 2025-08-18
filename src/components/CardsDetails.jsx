 import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
 
 const CardsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [coffee, setCoffee] = useState({})
    useEffect(()=>{
        const sigelData = data.find(coffee=> coffee.id == id);
        setCoffee(sigelData)
    },[data,id])

     const {name,description,rating,popularity,image,category,making_process,  ingredients,nutrition_info} = coffee
    return (
        <div>
             
            <p>{description}</p>
              <h1 className='text-3xl my-2 font-thin'>{name}</h1>
           <div >
             <div className=' '>
                <img  className='w-full lg:h-[450px] h-60' src={image} alt="" />
             </div>
             <div className='flex justify-between mt-5 items-center'>
                <div>
                  
                    <p className='font-thin text-2xl'>{category}</p>
                    <p className='font-bold'>Popularity : {popularity}</p>
                    <p className='font-bold'>Rating : {rating}</p>
                </div>
                 <button  className='btn text-white btn-info'>Add Favorite</button>
             </div>
             <div className='mt-6'>
                <p><span className='text-2xl font-thin'>Making_Progress :</span> <br /> {making_process}</p>
             </div>
             <div className='mt-6'>
                <h1 className='text-2xl font-thin'>ingredients :</h1>
                <ul className='font-serif ml-8'>
                    {
                         ingredients && ingredients.map((item,index) => <li className='list-disc' key={index}>{item}</li> )
                    }
                </ul>
             </div>
             <div className='mt-6'>
                        <h1 className='text-2xl font-thin'>nutrition_info :</h1>
                    
                        <ul className='font-serif text-xl ml-8'>
                            {
                              nutrition_info &&  Object.entries(nutrition_info).map(([key,value]) => <li className='list-disc' key={key}>
                                    {key} : {value}
                                </li> )
                            }
                        </ul>
             </div>
           </div>
        </div>
    );
 };
 
 export default CardsDetails;