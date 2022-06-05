import { createContext, useState, useReducer } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [state, dispatch] = useReducer();

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AppContext.Provider value={[isAuth, toggleAuth]}>
      {children}
    </AppContext.Provider>
  );
};
