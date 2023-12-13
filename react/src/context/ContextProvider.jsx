import { useContext } from "react";
import { createContext, useState } from "react";

const stateContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
    token: null,
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "John Doe",
        email: "sabakur@gmail.com",

    });
    const [token, setToken] = useState(123);
    return (
        <stateContext.Provider
            value={{ currentUser, setCurrentUser, token, setToken }}
        >
            {children}
        </stateContext.Provider>
    );
};

export const userStateContext = () => useContext(stateContext);
