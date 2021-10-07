import React, {useState, useContext } from 'react';
import CountryCards from './CountryCards';
import SearchAndFilter from './searchAndFilter';
import {StateContext} from '../Contexts/StateContext'
import axios from 'axios';

const MainComponent = () => {
    
    const {darkModeValue} = useContext(StateContext);
    const [ darkMode, setDarkMode ] = darkModeValue;

    return (
        <div style={ darkMode ? { overflowX: 'hidden', background: '#202c37' } : {overflowX: 'hidden', background: '#fafafa'}}>
            <SearchAndFilter />
            <CountryCards />
        </div>
    )
}

export default MainComponent
