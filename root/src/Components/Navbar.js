import React, {useState, useContext } from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs'
import {StateContext} from '../Contexts/StateContext'

const Navbar = () => {
  const {darkModeValue} = useContext(StateContext);
  const [ darkMode, setDarkMode ] = darkModeValue;
    
    return (
      <header className={darkMode ? "navbar darkModeOn" : "navbar"}>
        <h1 className={darkMode ? "darkMode" : "lightMode"}>Where in the world?</h1>
        <a className={darkMode ? "darkMode" : "lightMode"} type="button" onClick={(e) => setDarkMode(!darkMode)}>
          <span>{darkMode ? <MdDarkMode /> : <BsFillSunFill />}</span>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </a>
      </header>
    );
}

export default Navbar
