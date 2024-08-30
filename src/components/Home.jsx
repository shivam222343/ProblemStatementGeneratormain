import React, { createElement } from 'react'
import './Home.css'
import { p1 } from './Database'
import { useState } from 'react'

function Home() {

const [title, settitle] = useState("")

const submitHandller = (e) => {
    e.preventDefault()
    if(title != "")
    {
   ""
    }
  }

    //database

    
    const addtab = () => {
        let id = document.querySelector(".input").value;
        settitle("")
console.log(id);

    
        p1.Id.forEach((val) => {
            if (id == val) {
                console.log(p1.Id[0] + "  " + p1.Id[1]);
                const tab = document.createElement("div");
                tab.className = "psTab min-h-40 w-[90vw] lg:min-h-28 rounded-xl mt-5 bg-slate-900 flex flex-wrap flex-col"
                document.querySelector(".psTabs").appendChild(tab)
                
                const problemStatement = document.createElement("h1")
                problemStatement.innerText = "Problem Statement"
                problemStatement.className = "ProblemStatement text-green-400 font-bold text-xl m-2"
                tab.appendChild(problemStatement)

                const innerTab1 = document.createElement("div")
                innerTab1.className="InnerTab min-h-20 w-[90vw] flex-col lg:flex-row lg:min-h-16 rounded-xl flex flex-wrap "
                tab.appendChild(innerTab1);

                const innerTab2 = document.createElement("div")
                innerTab2.className="InnerTab min-h-20 w-[90vw] lg:w-[60vw]  lg:min-h-16 rounded-xl p-2 gap-2 lg:flex "
                innerTab1.appendChild(innerTab2);
                
                const projectName = document.createElement("h1");
                projectName.className = "PN ml-2 text-white "
                innerTab2.appendChild(projectName)
                projectName.innerText = `${p1.ProblemStatement}`

                //buttone View More
                const button = document.createElement("button")
                button.innerText = "View More"
                button.className = "buttone px-1 w-[200px] h-[50px] font-bold py-[1px] hover:bg-yellow-300 duration-500 bg-green-200 text-green-900 rounded-lg"
                innerTab2.appendChild(button);
                

                
            }
        });
        if (id !== p1.Id[0] || id !== p1.Id[2]) {
            const h = document.createElement("h1");
            h.innerHTML = "Note: Enter a valid input, e.g., (HTML, CSS). If entered correctly, ignore this.";
            h.className = "text-green-400 duration-700";
            document.querySelector(".psTabs").appendChild(h);
            console.log(h);
        
            // Remove the message after 2 seconds
            setTimeout(() => {
                h.remove();
            }, 2000);
        }
        
    }
    
    

    const addFunction = () => {
        const input = document.createElement("input");
        input.className = 'input bg-zinc-700 px-3 py-2 ml-2 mt-2 rounded-lg text-white';
        input.placeholder = 'Enter Language....';
        document.querySelector(".inputs").appendChild(input);
    
    }
    

    return (
        <div>
            <div className="Home bg-gradient-to-tr to-black from-slate-900 min-h-[80vh] w-[100vw] flex flex-col items-center">
                <div className="contex flex flex-col items-center">
                    <div className="Headline text-yellow-300 font-bold lg:text-3xl mt-6 text-2xl">Problem Statement Generator</div>
                    <div className="tagline text-white lg:text-lg text-md mt-2 ">"The Problem Lab: Generate Statements, Ignite Solutions"</div>
                    <div className="inputFields lg:h-[100px] h-[200px] flex-wrap overflow-hidden w-[90vw] mt-10 flex">
                        <div className="inputs h-[auto] max-w-[50vw] lg:w-[auto] duration-500">
                            <input value={title}
                            onChange={(e) => {
                                settitle(e.target.value)
                              }}
                            className='input bg-zinc-700 px-3 py-2 ml-2 mt-2 rounded-lg text-white' placeholder='Enter Language....' type="text" />
                        </div>
                        <button onClick={addFunction} className='add text-slate-950 mt-2 font-bold text-3xl pb-1 ml-5 lg:ml-3 rounded-lg bg-yellow-300 h-10 w-10'>+</button>
                        <button onSubmit={submitHandller} onClick={addtab} className="Generate text-white ml-5 rounded-xl bg-red-500 hidden lg:block font-bold text-2xl hover:bg-red-700 duration-500 px-3 py-1 mt-2 max-h-[40px]">Generate</button>
                    </div>
                    <button onSubmit={submitHandller} onClick={addtab} className="Generate text-white ml-5 rounded-xl mt-5 bg-red-500 lg:hidden font-bold text-2xl hover:bg-red-700 duration-500 px-3 py-1 max-h-[50px]">Generate</button>
                </div>
                <div className="psTabs duration-700 min-h-[80vh] w-[100vw] mt-5 flex items-center flex-col mb-5">
                </div>
            </div>
        </div>
    )
}

export default Home