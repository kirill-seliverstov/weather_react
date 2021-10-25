import SearchIcon from "../../../assets/icons/search-icon.svg";
import { Button } from '@mui/material';
import classes from './SearchButton.module.css';

function SearchButton({ getCityWeather }) {
    return (
        <div className={ classes.SearchButton }>
            <Button 
                className={ classes.SearchButton__element } 
                variant='contained'
                onClick = { getCityWeather }
            >
                <img src={ SearchIcon }/>
            </Button>
        </div>
    )
}

export default SearchButton;