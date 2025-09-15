import React from 'react'

const Home = () => {
  return (
    <div className='flex  md:flex-row flex-col   md:px-0 px-12 mb-5 justify-center md:space-x-14 md:ml-30 '>
        <div>
            <img src="portimg.png" alt="img" className='w-90 h-90 mt-10 rounded-full'/>
        </div>
        <div className='mt-24'>
            <h1 className='text-5xl bg-gray-100 px-4 rounded-2xl py-4 text-cyan-700 font-extrabold'>Hello I'm Sadak Hassan</h1>
            <p className='text-2xl font-bold text-cyan-400 ml-3 '>Full_stack webdeveloper</p>
            <p className='font-mono mt-3 ml-3'>I am a passionate Full Stack Web Developer.<br/> with experience in building dynamic and responsive.<br/> web applications Skilled in HTML, CSS, JavaScript, and- <br/>frameworks like React and Node.js</p>
            <button className='bg-cyan-600 text-white px-2 py-1 mt-5 ml-4 rounded hover:bg-gray-800'>Download</button>
            <button className=' text-blue-600 px-2 py-1 mt-5 ml-4 rounded--'>Read_more-</button>

        </div>
    </div>
  )
}

export default Home