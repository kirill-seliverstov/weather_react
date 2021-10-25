import { useState } from 'react';
import axios from 'axios';

import classes from './SearchWrapper.module.css';

import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function SearchWrapper() {
    const [city, setCity] = useState('');

    function setCityInput(val) {
        setCity(val);
    };

    function getCityWeather() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ process.env.REACT_APP_API_KEY }`)
        .then((data) => console.log(data))
    };

    return (
        <div className={ classes.SearchWrapper }>
            <SearchInput 
                city={ city }
                setCityInput={ setCityInput }
            />
            <SearchButton 
                getCityWeather={ getCityWeather }
            />
        </div>
    )
}

export default SearchWrapper;