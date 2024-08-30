import React from 'react'
import { IoPlayBackCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

function Ai() {
  return (
    <div>
      <div className="Home bg-gradient-to-tr to-black from-slate-900 min-h-[80vh] w-[100vw] flex flex-col items-center">
        <div className="part1 h-28 w-[94vw] flex justify-center items-center ">
          <div className="back h-28 w-[12vw] flex justify-center items-center ">
            <NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} duration-500 text-4xl text-white hover:text-yellow-400`} > <IoPlayBackCircle /></NavLink>
          </div>
          <div className="part1 h-28 w-[70vw] mr-[12vw] flex justify-center items-center ">
            <h1 className='AI text-xl font-bold text-yellow-300  ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 text-center'>AI</h1>
            <div className="Headline text-yellow-300 font-bold lg:text-3xl ml-4 text-2xl">Prompt Generator</div>
          </div>

        </div>
        <div className="part2 h-36 w-[94vw] flex justify-center lg:max-w-[60vw] items-center ">
          <h1 className='text-white text-lg'>"Unleash your programming potential with CodeCraft, the smart tool that
            generates precise code or logic for any programming language you choose.
            Whether you’re working in Python, JavaScript, Java, C++, or
            any other language"</h1>
        </div>
        <div className="part3 lg:h-20 lg:flex-row h-48 lg:w-[70vw] w-[94vw] flex-col flex justify-evenly items-center gap-5">
          <div className="part3 lg:h-20 lg:w-[20vw] h-20 w-[94vw] flex justify-center items-center gap-2 ">
            <div className="choose h-14 w-[46vw] text-white text-xl font-bold">Choose a language</div>
            <div className="choose  h-14 w-[46vw]">
             
            </div>
          </div>
          <div className="part3 lg:h-20 h-20 w-[94vw] lg:w-[40vw] flex justify-center items-center ">
            <input className='input bg-zinc-700 px-3 py-2 ml-2 mt-2 rounded-lg text-white' placeholder='Enter Language....' type="text" />
          </div>
          <div className="part3 lg:h-20 h-20 w-[94vw] lg:w-[40vw] flex justify-center items-center ">
            <button className="Generate text-white ml-5 rounded-xl  bg-red-500  font-bold text-2xl hover:bg-red-700 duration-500 px-3 py-1 max-h-[50px]">Generate</button>
          </div>
        </div>
        <div className="part4 h-52 w-[94vw] flex justify-center items-center"></div>
      </div>
    </div>
  )
}

export default Ai