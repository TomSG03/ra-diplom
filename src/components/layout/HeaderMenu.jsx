import React from 'react';
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  return (
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Главная</NavLink></li>
    <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/catalog">Каталог</NavLink></li>
    <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/about">О магазине</NavLink></li>
    <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contacts">Контакты</NavLink></li>
  </ul>
  )
}

export default HeaderMenu