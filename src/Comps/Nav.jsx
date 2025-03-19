import React, { useRef } from 'react';
import logo from '../assets/logo/26541077_7226627-removebg-preview.png';
import { TiThMenu } from 'react-icons/ti';
import { ImMenu } from 'react-icons/im';
import { FaWindowClose } from 'react-icons/fa';
const Nav = () => {
  const ul = useRef();
  const menu = useRef();
  const menuBtn = useRef();
  const close = useRef();
  const handleMenuBtn = (e) => {
    if (
      ul.current.style.display === '' ||
      ul.current.style.display === 'none'
    ) {
      ul.current.style.display = 'flex';
      menu.current.style.display = 'none';
      menu.current.style.position = 'absolute';
      menuBtn.current.style.backgroundColor = 'red';
      close.current.style.display = 'inline';
      close.current.style.position = 'static';
    } else if (ul.current.style.display === 'flex') {
      ul.current.style.display = 'none';
      menu.current.style.display = 'inline';
      menu.current.style.position = 'static';
      menuBtn.current.style.backgroundColor = '#fd9337';
      close.current.style.display = 'none';
      close.current.style.position = 'absolute';
    }
  };
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <button
          onClick={handleMenuBtn}
          ref={menuBtn}
          className='menuB'
          style={{}}
        >
          <ImMenu ref={menu} />
          <FaWindowClose ref={close} />
        </button>
        <ul ref={ul}>
          <li>
            <a href=''>FAQ</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
