import React from 'react'

const About = () => {
  return (
    <div className='md:ml-40'>
    <h1 className='text-center text-3xl mt-10'>About my Skils 🤹‍♀️</h1>
    <hr className='w-40 ml-[530px] mt-2'/>
   
    <div className='flex  md:flex-row flex-col  md:px-0 px-12 mb-5 md:space-x-14 md:ml-30'>
        
        <div >
            <img src="Mern.png" className='rounded-full w-80 h-80 ' alt="mern" />
        </div>
        <div className='flex mt-16 flex-col space-y-4'>
           <div>
             <h1>Html and css</h1>
            <div className='w-60 rounded bg-gray-200 h-1.5 '><div className='w-48 rounded-lg h-1.5 bg-green-500'></div></div>
           </div>
           <div>
             <h1>Vanilla_JavaScript</h1>
            <div className='w-60 rounded bg-gray-200 h-1.5 '><div className='w-50 rounded-lg h-1.5 bg-green-500'></div></div>
           </div>
           <div>
             <h1>React.js</h1>
            <div className='w-60 rounded bg-gray-200 h-1.5 '><div className='w-44 rounded-lg h-1.5 bg-green-500'></div></div>
           </div>
           <div>
             <h1>Node.js and Mogondb</h1>
            <div className='w-60 rounded bg-gray-200 h-1.5 '><div className='w-48 rounded-lg h-1.5 bg-green-500'></div></div>
           </div>
        

        </div>
    </div>
     </div>
  )
}

export default About