import React from 'react'
import { useState } from "react"
const Terminal = () => {
  const history = [
    "welcome --init",
    "Type 'help' to begin"
  ];

  const [command, setCommand] = useState("");
  const [allowStateChange,setallowStateChange]=useState(false);
  const [messages,setMessages]=useState(["Experince","Education","Contact"]);

  const handelKeyDown=(e)=>{
    if(e.key.trim().toLowerCase()==="enter"){
      if(command.trim().toLowerCase()==="help"){
        setallowStateChange(true);
      }
    }
  }
  return (
    <div className='hidden h-full w-full md:flex md:flex-col' style={{ transform: 'scale(1.1)' }}>
      <div className='h-9 w-full bg-slate-900 flex flex-row gap-2 items-center p-2 rounded-md'>
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
      </div>
      <div className='h-[90%] w-full bg-black text-white text-sm pt-2 px-2 overflow-y-auto font-mono rounded-md'>
        {history.map((Line, idx) => {
          return (
            <p key={idx}><span className='text-gray-400'>cmd raunak_tomar&gt;</span> {Line} </p>
          )
        })}
        <div className='flex'>
          {/* support user input here */}
          {/* if user enters  a command number of lines must increase in here */}
          <p ><span className='text-gray-400'>cmd raunak_tomar&gt;</span>           <input type="text" className='border-none outline-none focus:outline-none' placeholder="type help to begin..." value={command} onChange={(e)=>setCommand(e.target.value)} onKeyDown={handelKeyDown} readOnly={allowStateChange} />
</p>
        </div>

        {
          allowStateChange ?
           (
            <div>
              <p>Choose Command to Navigate</p>
              {
                messages.map((msg,idx)=>{
                  return (
                    <div className='flex'>
                      <p  className='text-gray-400'>&gt; </p>
                      &nbsp;
                      <p key={idx}>
                        <a href={`#${msg.toLowerCase()}`} className="hover:text-blue-700">{msg}</a>
                      </p>
                    </div>
                  )
                })
              }

            </div>
          ) : null
        }
        {
          allowStateChange ? (
        <div className='flex'>
          <p  >
          <span className='text-gray-400'>cmd raunak_tomar&gt;
          </span>    
          &nbsp;
          <button className='text-red-800 font-bold hover:text-red-600'>click to connect with me!</button>
         </p> 
        </div>
          ) : null
        }
      </div>
      


    </div>
  )
}

export default Terminal