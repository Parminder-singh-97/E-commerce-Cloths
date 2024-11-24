import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
    <section id="header" className='flex'>
    <a href="">
      <img src="/images/logo.png" alt="logo" className="logo" />
    </a>
    <i className="fa-solid fa-bars" />
    <nav>
      <ul className='p-4' id="navbar">
        <Link to={"/"}>
          
            Home
        
        </Link>
        <Link to={"/Shop"}>
         
            Shop
         
        </Link>
        <Link to={"/Blog"}>
       
            Blog
       
        </Link>
        <Link to={"/About"}>
         
            About
 
        </Link>
        <Link to={"/Contact"}>
         
            contact
   
        </Link>
        <Link className='relative' to={'/Cart'}>
          
            <i className="fa-solid fa-bag-shopping text-[25px]" /> <div className=' top-[-15px] right-[-25px] absolute rounded-full text-[12px] bg-red-700 text-white flex px-3 py-1 m-0 '>1</div>
      
        </Link>
      </ul>
    </nav>
  </section>
      
    </>
  )
}

export default Header
