import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
const Nav = () => {

  const [menu ,setMenu]= useState(false)

  const HandleMenu = ()=>{
    setMenu(!menu)
  }

  return (
    <>
  
    <div className='md:flex hidden mx-10 justify-between mt-4 items-center'>
        <h1 className='w-10 h-10 rounded bg-gray-800 text-center text-white  p-2 px-2 justify-center '>
            S
        </h1>
        <ul className='flex space-x-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'projects'}>Projects</Link>
            <Link to={'contact'}>Contact</Link>
        </ul>
        <button className='bg-cyan-600 text-white px-2 py-1 rounded hover:bg-gray-800'>Download</button>
    </div>


    {/* mobile */}
    <div className='md:hidden mt-5 flex justify-between mx-10'>
      <div>
         <h1 className='w-10 h-10 rounded bg-gray-800 text-center text-white  p-2 px-2 justify-center '>
            S
        </h1>
      </div>
      <button onClick={HandleMenu}>{menu? <VscChromeClose size={30}/> :<RiMenu3Line size={30}/>}</button>
    </div>

    {
      menu&&
      <div className='ml-5 md:hidden '>
         <ul className='flex mt-3 flex-col space-y-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'projects'}>Projects</Link>
            <Link to={'contact'}>Contact</Link>
        </ul>
        <button className='bg-cyan-600 mt-3 text-white px-2 py-1 rounded hover:bg-gray-800'>Download</button>
    
      </div>
    }


      </>
  )

}

export default Nav