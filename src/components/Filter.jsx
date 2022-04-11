import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./filter.css"


export default function Filter( {label, handleFilter} ) {
    return (
        <div className="checkbox">
            <FormControlLabel control={<Checkbox color="success" 
            onChange={handleFilter} 
            name={label} 
            sx = {{'& .MuiSvgIcon-root': { fontSize: 15 }, '& .MuiCheckbox-root' : {fontSize : 20}}}
            />} 
            label={label} />
        </div>
    )
}
