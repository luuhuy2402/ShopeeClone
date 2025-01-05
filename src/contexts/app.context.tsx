import { createContext, useState } from "react";
import { getAccessTokenFromLS, getProfileFromLS } from "../utils/auth";
import { User } from "../types/user.type";

interface AppContextInterface {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    profile: User | null;
    setProfile: React.Dispatch<React.SetStateAction<User | null>>;
}

const initialAppContext: AppContextInterface = {
    isAuthenticated: Boolean(getAccessTokenFromLS()),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null,
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        initialAppContext.isAuthenticated
    );
    const [profile, setProfile] = useState<User | null>(
        initialAppContext.profile
    );
    // nếu ko truyền value vào provider thì nó mặc định sẽ lấy default value của createContext (ở đây là initialAppContext)
    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                profile,
                setProfile,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
