import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    // console.log(categories)
  return <div role="tablist" className="tabs tabs-lift mb-5">
    {
        categories.map((category) => (<NavLink
        className={({isActive})=> `tab ${isActive? "tab-active text-warning" : ""} `}
        role="tab"
        to={`/category/${category.category}`}
        key={category.category} 
        >{category.category}</NavLink>))
    }
  </div>;
};

export default Categories;
