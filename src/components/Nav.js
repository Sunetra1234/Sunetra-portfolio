import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi';
import { FaUserGraduate } from 'react-icons/fa';
import {BsClipboardData,BsBriefcase,BsChatSquare, BsChatSquareText} from 'react-icons/bs';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
  <nav className='fixed botton-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="conatiner mx-auto">
      <div className='w-full bg-black/20 h-[60px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
          <Link to='home'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link to='about' 
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link to='education'
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer w-[60px] flex items-center justify-center'>
            <FaUserGraduate/>
          </Link>
          <Link to='skills' 
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BsBriefcase/>
          </Link>
          <Link to='contact' 
                activeClass='active'
                smooth={true}
                spy={true}
                offset={20}
                className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BsChatSquareText/>
          </Link>
      </div>
    </div>
  </nav>
  )
};

export default Nav;
