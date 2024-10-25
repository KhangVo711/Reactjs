import React, {useState, useEffect} from "react";

export const Context = React.createContext();
export const ContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(false);
    const [isData, setData] = useState({});
    useEffect(() => {
        if (isData) {
          console.log(`Data has changed context: ${isData}`);
        }
      }, [isData]);
    return (
        <Context.Provider value={{isLogin, setLogin, isData, setData}}>
            {children}
        </Context.Provider>
    )
}