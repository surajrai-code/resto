import React from 'react'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import headerimg from '../../assests/header.jpeg'
const Header = () => {
  return (
    <>
    <header className={classes.header}>
            <h1>REACT MEALS</h1>
            <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
            <img src={headerimg} alt='headerImage'/>
        </div>
    </>
  )
}

export default Header