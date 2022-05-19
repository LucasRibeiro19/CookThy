import SearchAppbar from './SearchAppBar';
import { DrawerContextProvider } from '../contexts/DrawerContext';
function Header() {
    return ( 
        <DrawerContextProvider>
            <header>
                <SearchAppbar/>
            </header>
        </DrawerContextProvider>
     );
}

export default Header;