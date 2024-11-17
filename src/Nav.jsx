import { useState } from 'react';
import sung from './assets/sung.jpg'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

function Nav(){

    const [isMenuOpen, setToggleMenu] = useState(false)
    
    function toggleMenu(){
        setToggleMenu(prevState => !prevState)
    }

    return(
            <div className='md:flex justify-center w-[100vw] text-white'>
                <nav className="bg-black md:bg-transparent h-[65px] flex items-center px-[20px] fixed w-[100%] justify-between md:max-w-[1000px]">
                    <div className='flex items-center justify-center gap-4'>
                        <img className='rounded-full h-[50px] w-[50px] ' src={sung} alt="" />
                        <h2 className='text-2xl font-bold'>Ian</h2>
                    </div>
                    <button className='transition-colors ease-in-out bg-[#4893D9] py-[8px] px-[10px] ml-auto mr-[25px] text-black rounded hover:bg-pink-500' >Hire Me</button>
                    <div>
                        <ul className='flex gap-5 font-semibold'>
                            <li className='hidden md:block cursor-pointer transition-transform hover:scale-125 duration-300 '><a href="#aboutMe">About Me</a></li>
                            <li className='hidden md:block cursor-pointer transition-transform hover:scale-125 duration-300 '><a href='#Skills'> Skills </a></li>
                            <li className='hidden md:block cursor-pointer transition-transform hover:scale-125 duration-300 '><a href="#projects">Projects</a></li>
                            {isMenuOpen ? (<IoCloseOutline className='md:hidden text-3xl' style={{color: 'red'}} onClick={toggleMenu}/>) : (<IoIosMenu className='text-red-500 md:hidden text-3xl' onClick={toggleMenu}/>)}
                        </ul>
                    </div>
                </nav>
                <div className={`transition-opacity top-[65px] bg-white w-full h-[30vh] md:hidden fixed ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}>
                    <ul className='text-black w-[100%] h-[100%] flex flex-col items-center justify-around font-semibold text-xl'>
                        <li className=' cursor-pointer text-center flex items-center justify-center w-[100%] h-[10vh] text-black'><a href="#aboutMe" onClick={toggleMenu}>About Me</a></li>
                        <li className=' cursor-pointer text-center flex items-center justify-center w-[100%] h-[10vh] text-black'><a href='#Skills' onClick={toggleMenu}> Skills </a></li>
                        <li className=' cursor-pointer text-center flex items-center justify-center w-[100%] h-[10vh] text-black'><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Nav