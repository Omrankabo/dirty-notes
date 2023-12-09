import { useTheme } from '../context/ThemeProvider'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {
  IoIosMoon,
  IoIosSunny
} from 'react-icons/io'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  const {theme,handleTheme} = useTheme()
  const [open,setOpen] = useState(false);
  
  const handleClick = ()=>{
    setOpen(!open);
  }
  
  return (
    // TODO: how to make blur in tailwind  
    <nav className='fixed top-0 left-0 items-center w-screen py-4 backdrop-blur-sm'>
      <div className='container gap-16 md:mx-auto md:max-w-[684px] lg:max-w-[736px] flex justify-between px-4'>  
        {/* logo */}
        <Link to='/' className='text-lg font-bold'>Dirty Notes</Link>
        {/* desktop*/}
        <div className='items-center justify-start flex-1 hidden gap-6 lg:flex'>
          {/* TODO: react router dom internal links */}
          <NavLink to={'/Notes'} className='cursor-pointer'>Notes</NavLink>
          <NavLink to={'/Contact'} className='cursor-pointer'>Contact</NavLink>
        </div>
        {/* mobile */}
        <div className='flex items-center gap-4 pr-4'>
          {/* theme toggle */}
          <button className='p-2 rounded-sm cursor-pointer text-text-base ' onClick={handleTheme}>
            {
              theme? <IoIosSunny/> : <IoIosMoon/>
            }
            
          </button>
          {/* container */}
          <div className='lg:hidden'>
            {/* make a lighter bg */}
            <button className='p-2 rounded-sm cursor-pointer text-text-base bg-secondary-base' onClick={handleClick}>
              <FaBars className=''/>
            </button>
            {/* TODO: framer motion */}
            <div className={`${open? 'top-16': '-top-96'} max-w-[200px] sm:max-w-[280px] absolute flex-col w-2/4 py-2 border-2 rounded-lg bg-accentLighter backdrop-blur-lg right-8  border-secondary-base text-text-100`}>
              <NavLink to={'/'} className='block px-4 py-2 transition-all cursor-pointer hover:bg-secondary-base transition-300 hover:underline'>About</NavLink>
              <NavLink to={'/Notes'} className='block px-4 py-2 transition-all cursor-pointer hover:bg-secondary-base transition-300 hover:underline'>Notes</NavLink>
              <NavLink to={'/Contact'} className='block px-4 py-2 transition-all cursor-pointer hover:bg-secondary-base transition-300 hover:underline'>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
