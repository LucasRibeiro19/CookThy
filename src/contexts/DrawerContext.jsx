import { createContext, useState } from "react";

const DrawerContext =  createContext();

export const DrawerContextProvider = ({children}) => {

    const [open, setOpen] = useState(false);

    const handleDrawer = () =>{
        setOpen(true)
      }

    return (
        <DrawerContext.Provider
            value={{
                open,
                setOpen,
                handleDrawer,
            }}
        >
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContext;