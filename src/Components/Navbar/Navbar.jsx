import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from './../Home/Home';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    // const [dark,setDark] = useState(true)
    const { dark , setDark , name } = useContext(AuthContext)
    const link = <>
   
    <NavLink   to={'/'} className='px-3 py-2 my-2 mr-3 rounded-lg'>Home</NavLink>

    
  
    <NavLink to={'/AddProduct'} className='px-3 py-2 my-2 mr-3 rounded-lg'>Add Product</NavLink>
    
    <NavLink to={'/cart'} className='px-3 py-2 my-2 mr-3 rounded-lg'>My Cart</NavLink> 
    </>



    return (
        <div className={`${dark ? 'bg-[#192655]' : 'bg-[#e9e9f0]'}  ${dark ? 'text-white' : 'bg-[#192655]'}  `}>
            <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#192655] text-white  mt-3 z-[1] p-2 shadow  rounded-box w-52">
       {link}
      </ul>
    </div>
    <div className='flex items-center'>
    <a className="btn btn-ghost md:block hidden normal-case text-xl"><img className='w-[60px]' src="/logo.png" alt="" /></a>
     <h2 className='font-medium'>TECH<span className={` ${dark? 'text-orange-400' : 'text-orange-600' }`}>WORLD</span></h2>
     <button  className='ml-4'>
     {
        dark ? <>
        <div onClick={()=>{setDark(!dark)}} className='flex gap-4  items-center'>
        <BsFillMoonStarsFill></BsFillMoonStarsFill>
        <input className="switch" type="checkbox" defaultChecked/>
        </div>

        </>  :<>
        <div onClick={()=>{setDark(!dark)}} className='flex gap-2  items-center'>
        <BsFillSunFill></BsFillSunFill>
        <input className="switch" type="checkbox" defaultChecked/>
        </div></>
         
     }
     </button>
   
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
     {link}
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <div className='flex md:flex-row flex-col  gap-2 items-center'>
        <img className='rounded-full w-[40px] ' src="/user.png" alt="" />
        
    </div>
    <div>
     
    </div>
    <button className={`btn ${dark ? '' : 'border hover:border-black hover:text-black'} ${dark ? 'bg-green-300' : 'bg-black'} ${dark ? 'text-[#192655]' : 'text-white'}  `}>Login</button>
    <button className={`btn ${dark ? '' : 'border hover:border-black hover:text-black'} md:block hidden bg-blue-500 text-white hover:text-black`}>Register</button>
  </div>
</div>
     

        </div>
    );
};

export default Navbar;