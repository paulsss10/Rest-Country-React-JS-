import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const StateContext = createContext();

export const StateContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);
    const [countries, setCountries] = useState([]);

    const countryAPI = axios.create({
        baseURL: 'https://restcountries.com/v2/all'
    })

    const fetchCountries = async () => {
        await countryAPI.get("/").then((res) => {
            console.log(res.data)
            setCountries(res.data);
        })
    }

    useEffect(() => {
        fetchCountries();
        console.log(countries)
    }, [setCountries])

    return (
        <StateContext.Provider value={{ darkModeValue: [darkMode, setDarkMode], countriesValue: [countries, setCountries] }}>
            {props.children}
        </StateContext.Provider>
    )
}