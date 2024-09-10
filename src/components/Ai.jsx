import React, { useState, useCallback, useRef } from 'react';
import { IoPlayBackCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Ai() {
  const [question, setQuestion] = useState("Enter a prompt here....");
  const [response, setResponse] = useState("hey! I am always ready to help you.....");
  const [fontsize, setfontsize] = useState(30)
  
  const decrease =(e)=>{
    if(fontsize > 30)
    {
      setfontsize( fontsize-10);
    }
    console.log(fontsize);
    
  }

  const increase =(e)=>{
    if(fontsize < 100)
    {
      setfontsize( fontsize+10);
    }
    console.log(fontsize);
    
  }


  const enter = () => {
    setQuestion("");
  }

  const A = async () => {
    setResponse("Loading..... (It may take 5 to 15 seconds to respond....)");

    try {
      const res = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCBQIO3gKfA1KSyE3u-m6HuK7Sohb1N4S4',
        method: 'post',
        data: { 
          "contents": [{ 
            "parts": [{ 
              "text": question 
            }] 
          }]
        }
      }
       );
      setResponse(res.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  }

  const responseRef = useRef(null);

  const copyToClipboard = useCallback((e) => {
    if (responseRef.current) {
      const text = responseRef.current.textContent;
      navigator.clipboard.writeText(text).then(() => {
        e.target.innerText = "Copied";
        setTimeout(() => {
          e.target.innerText = "Copy";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    }
  }, []);

  return (
    <div>
      <div className="Home bg-gradient-to-tr to-black from-slate-900 min-h-[80vh] w-[100vw] flex flex-col items-center pb-10">
        <div className="part1 h-28 w-[94vw] flex justify-center items-center">
          <div className="back h-28 w-[12vw] flex justify-center items-center">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} duration-500 text-4xl text-white hover:text-yellow-400`} >
              <IoPlayBackCircle />
            </NavLink>
          </div>
          <div className="part1 h-28 w-[70vw] mr-[12vw] flex justify-center items-center">
            <h1 className='AI text-xl font-bold text-yellow-300 ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 text-center'>AI</h1>
            <div className="Headline text-yellow-300 font-bold lg:text-3xl ml-4 text-2xl">Prompt Generator</div>
          </div>
        </div>
        <div className="part2 h-36 w-[94vw] flex justify-center lg:max-w-[60vw] items-center">
          <h1 className='text-white text-lg'>"Unleash your programming potential with CodeCraft, the smart tool that generates precise code or logic for any programming language you choose. Whether you’re working in Python, JavaScript, Java, C++, or any other language"</h1>
        </div>
        <div className="flex flex-row mt-7">
          <input 
            onClick={enter}
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            className='border-2 border-r-0 border-yellow-400 w-[60vw] bg-zinc-700 px-3 py-2 mt-3 rounded-l-lg text-white' 
            type="text" 
          />
          <button 
            onClick={A} 
            className="Generate border-2 border-l-0 border-yellow-400 text-white rounded-r-lg bg-red-500 font-bold text-2xl hover:bg-red-700 duration-500 px-3 py-1 mt-3 max-h-[45px]"
          >
            Generate
          </button>
        </div>
       
        <div className="response relative">
        <div className="fontsize absolute left-1 top-10">
          <button onClick={decrease} className='minus bg-yellow-400  px-2  font-extrabold'>-</button>
          <button onClick={increase} className='plus bg-yellow-400 ml-5  px-2  font-extrabold'>+</button>
        </div>
          <pre ref={responseRef} className='response p-7 font-semibold text-wrap font-mono bg-zinc-950 min-h-96 mt-20 min-w-[95vw] text-white rounded-md hidden lg:block'>
            <div onClick={copyToClipboard} className="copy bg-zinc-900 text-yellow-400 text-lg right-0 mr-10 cursor-pointer absolute px-4 top-30 inline font-semibold p-1 rounded-md">Copy</div>
            {response}
          </pre>
          <pre ref={responseRef} onClick={copyToClipboard} className='p-2 font-semibold font-mono bg-zinc-950 min-h-96 w-[90vw] overflow-hidden text-wrap text-white mt-20 rounded-md lg:hidden'>
            <div className="copy bg-zinc-950 text-yellow-400 text-lg right-0 absolute font-semibold top-0 px-4 cursor-pointer p-1 rounded-md mt-11">Copy</div>
            {response}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Ai;
