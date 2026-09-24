import React, { useContext } from 'react'
import { navData } from "../Data/navItems"
import StateContext from "../Context/StateMgmt"

const Navbar = () => {
    const { darkMode } = useContext(StateContext)

    return (
        <div className={`w-full flex flex-col ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
                    Raunak Tomar
                </div>

                <ul className="hidden items-center justify-end gap-4 text-sm font-medium md:flex lg:gap-8 lg:text-base">
                    {navData.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className="transition-opacity hover:opacity-80">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar