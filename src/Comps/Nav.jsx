import React from 'react';
import logo from '../assets/logo/26541077_7226627-removebg-preview.png';
const Nav = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul>
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
