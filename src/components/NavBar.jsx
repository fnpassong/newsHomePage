import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from'../assets/images/logo.svg';
import openMenu from '../assets/images/icon-menu.svg';
import closeMenu from '../assets/images/icon-menu-close.svg';

import '../scss/styles/navbar.scss';

export const NavBar = () => {

    const [iconOpen, setIconOpen] = useState(false);

  return (
    <header>
        <div className="wrapper container">

            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className='openMenu'>
                <img src= {openMenu} alt="" onClick={() => {
                    setIconOpen(!iconOpen)
                }}/>
            </div>
 
            <nav className= {iconOpen ? 'open' : ''}>

                <div className="closeMenu">
                    <img src= {closeMenu} alt="" onClick={() => {
                        setIconOpen(!iconOpen);
                    }} />
                </div>

               <NavLink to='/' onClick={() => {setIconOpen(!iconOpen);}}>Home</NavLink>
               <NavLink to='/new' onClick={() => {setIconOpen(!iconOpen)}}>New</NavLink>
               <NavLink to='/popular'>Popular</NavLink>
               <NavLink to='/trending'>Trending</NavLink>
               <NavLink to='/categories'>Categories</NavLink>
            </nav>

        </div>
    </header>
  )
}
