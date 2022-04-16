
import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CategoriesItem({ item }) {
  const { categorySelectId } = useSelector((state) => state.reducerCatalog);

  return (
    <li className="nav-item">
    <NavLink className={( isActive ) => categorySelectId === item.id  ? "nav-link active" : "nav-link"} to="#" >{item.title}</NavLink>
  </li>
  )
}

export default CategoriesItem