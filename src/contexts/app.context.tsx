import { createContext, useState } from "react";
import { getAccessTokenFromLS } from "../utils/auth";

interface AppContextInterface {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialAppContext: AppContextInterface = {
    isAuthenticated: Boolean(getAccessTokenFromLS()),
    setIsAuthenticated: () => null,
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        initialAppContext.isAuthenticated
    );
    // nếu ko truyền value vào provider thì nó mặc định sẽ lấy default value của createContext (ở đây là initialAppContext)
    return (
        <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AppContext.Provider>
    );
};
