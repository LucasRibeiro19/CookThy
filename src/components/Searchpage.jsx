import '../searchpage.css';
import FilterButton from './FilterButton';
import FiltersList from './FiltersList';

function Searchpage({handleDispFilters, isFiltersDisp}) {
    return ( 
        <>
            <FilterButton handleDispFilters={handleDispFilters}/>
            {isFiltersDisp ? <FiltersList/> : null}
        </>
     );
}

export default Searchpage;