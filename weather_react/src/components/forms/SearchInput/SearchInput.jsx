import { TextField } from "@mui/material";

function SearchInput({ city, setCityInput}) {
    return (
        <div>
            <TextField 
            placeholder="Minsk"
            value = { city }
            label="City" 
            size="large"
            onChange = { (e) => setCityInput(e.target.value) }
            />
        </div>
    )
}

export default SearchInput;