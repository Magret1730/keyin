import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navbar'>
        <Link className='navbar-link' to='/'>Home</Link>
        <Link className='navbar-link' to='/RandomAdvice'>RandomAdvice</Link>
        <Link className='navbar-link' to='/AdviceList'>AdviceList</Link>
    </div>
  )
}

export default Navigation;