import React, { useState } from 'react'
import { Menu } from "lucide-react"
import {navData} from "../Data/navItems"
import StateContext from "../Context/StateMgmt"
import { Dark,light } from '../Data/ColorSystem'
import { useContext } from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const { darkMode, setDarkMode } = useContext(StateContext);
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className={`text-${darkMode ? Dark.textp : light.textp} w-full flex flex-col`}>
            <div className='w-full flex'>

                <div className='h-full w-[40%] text-lg font-bold ml-4'>
                    Raunak Tomar
                </div>
                <div className='h-full w-[60%] '>
                    <ul className='md:flex justify-end gap-4 lg:gap-10 mr-6 text-md font-md hidden'>
                        {
                            navData.map((item,idx)=>{
                                return (
                                    <li key={item.id}>
                                        <a href={item.href}>{item.label}</a>

                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    <div className='md:hidden flex justify-end mr-2'>
                        <Menu size={32} onClick={toggleMenu} />

                    </div>

                </div>
            </div>
            <div className='relative'>
                {
                    open && (
                        // <ul className=' absolute z-50 h-40 bg-grey-800 flex flex-col justify-center text-center text-lg font-bold'>
                        <ul className={`bg-${darkMode ? Dark.primary : light.primary} absolute top-2 left-0 w-full z-50  flex flex-col justify-center text-center text-lg font-bold pt-6 gap-4 mt-2 `}>
                            {
                                navData.map((item)=>{
                                    return (
                                        <li key={item.id}   className={`bg-${darkMode ? Dark.primary : light.primary} border-b-1 flex items-center justify-center`}>
                                            <a onClick={toggleMenu} href={item.href} className=''>{item.label}</a>
                                        </li>
                                    )
                                })
                            }  
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar