import React, { useEffect, useState } from 'react'
import { Allprojects } from '../../../Projects'

const Projects = () => {

  const [fprojects , setfProjects] = useState([])

  const fetchProjects = ()=>{
    setfProjects(Allprojects)
  }
  useEffect(()=>{
    fetchProjects()
  },[])
  return (
    <div className='mt-5'>
      <h1 className='text-center text-3xl '>Some of my Projects</h1>
      <div className='grid grid-cols-2  md:grid-cols-4 px-4 space-x-4 pl-4 mt-4 mx-10'>
       {fprojects.map((proj)=>(
        <div className='bg-gray-600 my-5  rounded-lg '>
          <h1 className='text-center text-2xl text-white font-bold mt-3'>{proj.Name}</h1>
          <img src={proj.Image} alt="img" className='md:ml-10 py-2 px-2 w-60 h-76 rounded-2xl mt-4'/>
          <h1 className='bg-gray-700 px-2 mt-3 py-2 w-20 ml-10 text-center mb-2 text-white rounded '><a href={proj.link} className=''>View</a></h1>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Projects