import { DrawerContextProvider } from '../contexts/DrawerContext';
import '../header.css';
import SearchAppbar from './SearchAppBar';
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