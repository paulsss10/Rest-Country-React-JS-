import React, { useEffect, useState, useContext } from 'react';
import {StateContext} from '../Contexts/StateContext';

const CountryCards = () => {
  const {darkModeValue} = useContext(StateContext);
  const {countriesValue} = useContext(StateContext);
  const [ darkMode, setDarkMode ] = darkModeValue;
  const [ countries, setCountries ] = countriesValue;

    return (
      <section className="countryCards">
        <div className="container container--pall">
          <div className="countryCards__cards">
            {countries.map((country) => (
              <div className={darkMode ? "card darkModeOn" : "card"}>
                <div className={darkMode ? "card__item darkModeOn" : "card__item"}>
                  <div className="card-image">
                    <img src={country.flags.svg} />
                  </div>

                  <div class="card-info">
                    
                    <h2 class={darkMode ? "card-title darkModeOn" : "card-title"}>{country.name}</h2>
                    <small className={darkMode ? "darkModeOn" : ""}><span>Population: </span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</small><br />
                    <small className={darkMode ? "darkModeOn" : ""}><span>Region: </span>{country.region}</small><br />
                    <small className={darkMode ? "darkModeOn" : ""}><span>Capital: </span>{country.capital}</small>
                    <ul>
                    {/* {country.languages.map((lang) => (
                      <li>{lang.name}</li>
                    ))} */}
                      
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default CountryCards
