
import Filter from "./Filter";
import './filter.css';

export default function Filters( {labels, handleFilter} ) {
    return (
        <div>
            {labels.map(label=><Filter label={label} handleFilter={handleFilter}></Filter>)}
        </div>
    )
}
