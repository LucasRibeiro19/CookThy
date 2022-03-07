import { createContext } from "react";
import { useState } from "react";


export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {


const [term, setTerm] = useState('');
const [interTerm, setInterTerm] = useState('');

const handleInterTerm = (event) => {
    setInterTerm(event.target.value)
}

const handleTerm = (event) => {
    setTerm(interTerm)
}

console.log(term);
console.log(interTerm);

return(
    <SearchContext.Provider value= {{term, handleTerm, interTerm, handleInterTerm}}>
        {children}
    </SearchContext.Provider>
)

}


